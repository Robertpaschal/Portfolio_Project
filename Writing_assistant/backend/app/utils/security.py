import logging
import jwt
import hmac
import hashlib
import base64
import bcrypt
import requests
import secrets
import os
from datetime import datetime, timedelta
from fastapi import Depends, HTTPException, status, Header
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import User
from ..schemas import TokenData
from ..utils.redis_util import get_redis_client
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger(__name__)

# clerk's JWT issuer
CLERK_ISSUER = os.getenv("CLERK_ISSUER")
CLERK_AUDIENCE = os.getenv("CLERK_AUDIENCE")

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
    to_encode.update({"token_source": "backend"})

    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

    # store the token in Redis 
    redis_client.set(encoded_jwt, "active")

    return encoded_jwt

def verify_clerk_token(token: str):
    """verifies a Clerk token and stores it in Redis"""
    response = requests.get(f'{CLERK_ISSUER}/.well-known/jwks.json')
    response.raise_for_status() # Raises an error for bad responses
    jwks = response.json()

    try:
        header = jwt.get_unverified_header(token)
        rsa_key = {}
        for key in jwks["keys"]:
            if key["kid"] == header["kid"]:
                rsa_key = {
                    "kty": key["kty"],
                    "kid": key["kid"],
                    "use": key["use"],
                    "n": key["n"],
                    "e": key["e"]
                }
        if rsa_key:
            payload = jwt.decode(
                token,
                rsa_key,
                algorithms=["RS256"],
                audience=CLERK_AUDIENCE,
                issuer=CLERK_ISSUER
            )

            # Store the verified token in Redis
            redis_client.set(token, "active")

            return payload

    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token has expired",
            headers={"WWW-Authenticate": "Bearer"},
        )
    except jwt.InvalidTokenError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token",
            headers={"WWW-Authenticate": "Bearer"},
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Token validation failed: {str(e)}"
        )

    return None


def verify_clerk_signature(clerk_signature: str, request_body: bytes) -> bool:
    """Verify the Clerk webhook signature"""
    secret = os.getenv("CLERK_WEBHOOK_SECRET")
    expected_signature = base64.b64encode(hmac.new(secret.encode(), request_body, hashlib.sha256).digest())
    
    return hmac.compare_digest(clerk_signature.encode(), expected_signature)

def verify_token(token: str, credentials_exception):
    """decodes the JWT and confirms that it belongs to the specified user
    Confirm that the token is still in redis"""
    try:
        """
        logger.info("Verifying token...")
        # Try to verify it as a Clerk token
        clerk_payload = verify_clerk_token(token)
        if clerk_payload:
            logger.info(f"Clerk payload: {clerk_payload}")
            username: str = clerk_payload.get("sub")
        else:
        """
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        logger.info(f"Decoded token: {payload}")
        username: str = payload.get("sub")

        if username is None:
            raise credentials_exception
        
        # Check if the token is still active in Redis
        token_status = redis_client.get(token)
        logger.info(f"Token status from Redis: {token_status}")
        if token_status != "active":
            raise credentials_exception
        
        token_data = TokenData(username=username)
    except (jwt.PyJWTError, HTTPException) as e:
        logger.error(f"Token validation error: {e}")
        raise credentials_exception
    return token_data


def get_current_user(
        token: str = Depends(oauth2_scheme),
        x_token_source = Header(None),
        db: Session = Depends(get_db)):
    """using the verified token, this function
    checks for the assoicated user in the database and returns it"""
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    if x_token_source == "clerk":
        token_data = verify_clerk_token(token)
        user = token_data.get("sub")
    else:
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


def get_verified_token(
        token: str = Depends(oauth2_scheme),
        x_token_source = Header(None)):
    """
    Verify if the token is a Clerk token or a standard backend token.
    """
    try:
        if x_token_source == "clerk":
        # Try to verify as a Clerk token
            clerk_payload = verify_clerk_token(token)
            if clerk_payload:
                return token, "clerk"
        else:
        # If not Clerk, verify as a backend token
            verify_token(token, HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Could not validate credentials",
                headers={"WWW-Authenticate": "Bearer"},
            ))
        return token, "backend"
    except HTTPException:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token",
            headers={"WWW-Authenticate": "Bearer"},
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Token verification failed: {str(e)}"
        )
