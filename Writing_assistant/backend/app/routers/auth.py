from fastapi import APIRouter, Depends, HTTPException, status
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
    db: Session = Depends(
        database.get_db), form_data: OAuth2PasswordRequestForm = Depends()):
    """login route, authenticates by JSON Web Token"""
    user = db.query(models.User).filter(
        models.User.full_name == form_data.username). first()
    if not user or not security.verify_password(
            form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=400,
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
        email=user.email, hashed_password=security.get_password_hash(
            user.password), full_name=user.full_name)

    # Add the new user to the database
    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user


@router.post("/logout")
async def logout(token: str = Depends(security.oauth2_scheme)):
    """
    Logout the current user by revoking the authentication token.
    """
    try:
        security.redis_client.delete(token)
        return {"message": "Successfully logged out"}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Logout failed: {str(e)}"
        )