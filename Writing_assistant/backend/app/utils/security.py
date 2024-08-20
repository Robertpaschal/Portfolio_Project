import jwt
import bcrypt
import secrets
import os
from datetime import datetime, timedelta
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import User
from ..schemas import TokenData
from ..utils.redis_util import get_redis_client


# Secret key to encode the JWT token
# secret_key = secrets.token_hex(32)
SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = "HS256"

# Initialize Redis client
redis_client = get_redis_client()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")


def create_access_token(data: dict):
    """Creates a token using a randomly generated
    secret key, encodes it as a JSON Web Token"""
    to_encode = data.copy()
    
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

    # store the token in Redis 
    redis_client.set(encoded_jwt, "active")

    return encoded_jwt


def verify_token(token: str, credentials_exception):
    """decodes the JWT and confirms that it belongs to the specified user
    Confirm that the token is still in redis"""
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        
        # Check if the token is still active in Redis
        token_status = redis_client.get(token)
        if token_status != "active":
            raise credentials_exception
        
        token_data = TokenData(username=username)
    except jwt.PyJWTError:
        raise credentials_exception
    return token_data


def get_current_user(
        token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    """using the verified token, this function
    checks for the assoicated user in the database and returns it"""
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    token_data = verify_token(token, credentials_exception)
    user = db.query(User).filter(User.full_name == token_data.username).first()
    if user is None:
        raise credentials_exception
    return user


def get_password_hash(password: str) -> str:
    """Hashes a password"""
    return bcrypt.hashpw(
        password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verifies that a plain password matches the hashed password"""
    return bcrypt.checkpw(
        plain_password.encode('utf-8'), hashed_password.encode('utf-8'))
