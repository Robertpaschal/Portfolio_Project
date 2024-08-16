from pydantic import BaseModel
from datetime import datetime


class UserBase(BaseModel):
    """creats a userbase class thatt inherits from basemodel"""
    email: str
    full_name: str


class UserCreate(UserBase):
    """Creates user's password"""
    password: str


class User(UserBase):
    """retrieves a user from the database"""
    id: int
    is_active: bool

    class Config:
        """configuration for orm_mode
        Allows Pydantic mdoel to work with SQLAlchemy objects"""
        orm_mode: True


class DocumentBase(BaseModel):
    """describes how a documentbase would be called"""
    title: str
    content: str


class DocumentCreate(DocumentBase):
    """Creates a document using the variables
    inherited from documentbase"""
    pass


class Document(DocumentBase):
    """Describes varibales that determines how
    document would be retrieved from the database"""
    id: int
    owner_id: int
    created_at: datetime

    class Config:
        """configuration for orm_mode"""
        orm_mode: True


class Token(BaseModel):
    """The varaibles associated with the creation
    of a token are defined here"""
    access_token: str
    token_type: str


class TokenData(BaseModel):
    """Describes how to return a token data"""
    username: str = None


class PromptRequest(BaseModel):
    """When called, describes the varible used in the function"""
    prompt: str
    title: str
