from fastapi import APIRouter, Depends, HTTPException, status, Request
from sqlalchemy.orm import Session
from .. import models, schemas, database
from ..utils import security
from fastapi.security import OAuth2PasswordRequestForm


router = APIRouter(
    prefix="/auth",
    tags=["auth"],
)


@router.post("/login", response_model=schemas.Token)
def login_for_access_token(
    db: Session = Depends(database.get_db),
    form_data: OAuth2PasswordRequestForm = Depends()):
    """login route, authenticates by JSON Web Token"""
    user = db.query(models.User).filter(
        models.User.full_name == form_data.username).first()
    if not user or not security.verify_password(
            form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = security.create_access_token(data={"sub": user.full_name})
    return {"access_token": access_token, "token_type": "bearer"}


@router.post("/signup",
             response_model=schemas.User,
             status_code=status.HTTP_201_CREATED)
def create_user(
    user: schemas.UserCreate, db: Session = Depends(
        database.get_db)):
    """signup route that creates a user and adds
    his credentials to the database"""

    # Check if the user already exists
    db_user = db.query(models.User).filter(
        models.User.email == user.email).first()
    if db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered")

    # Hash the password and create a new user
    hashed_password = security.get_password_hash(user.password)
    db_user = models.User(
        email=user.email,
        hashed_password=hashed_password,
        full_name=user.full_name)

    # Add the new user to the database
    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user


@router.post("/logout")
async def logout(token: str = Depends(security.get_verified_token)):
    """
    Logout the current user by revoking the authentication token.
    """
    try:
        token_value, token_type = token

        # Handle token deletion based on the type
        security.redis_client.delete(token_value)

        if token_type in ["clerk", "backend"]:
            return {"message": "Successfully logged out"}
        
         # If token_type is not recognized, raise an error
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Unknown token type"
        )

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Logout failed: {str(e)}"
        )
    

@router.post("/webhook/clerk",
             response_model=schemas.User,
             status_code=status.HTTP_201_CREATED)
async def clerk_webhook(
    request: Request, db: Session = Depends(
        database.get_db)):
    """Webhook to handle user creation from Clerk"""

    # Verify Clerk's signature
    clerk_signature = request.headers.get("Clerk-Signature")
    request_body = await request.body()

    if not security.verify_clerk_signature(clerk_signature, request_body):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid Clerk signature")

    data = await request.json()

    if data.get("type") == "user.created":
        user_data = data.get("data")
        email = user_data.get("email_addresses")[0]["email"]
        username = user_data.get("username")
        full_name = username
        password = user_data.get("password", None)

        # Check if the user already exists
        db_user = db.query(models.User).filter(models.User.email == email).first()
        if not db_user:
            hashed_password = security.get_password_hash(password) if password else "clerk_user"

            # Create a new user record
            db_user = models.User(
                email=email,
                full_name=full_name,
                hashed_password=hashed_password
            )

            db.add(db_user)
            db.commit()
            db.refresh(db_user)
        
        return db_user
    else:
        raise HTTPException(status_code=400, detail="Event type not handled")
