from sqlalchemy import Column, Integer
from sqlalchemy import String, Text, ForeignKey, Boolean, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from datetime import datetime

from app.database import Base
import sys
import os


class User(Base):
    """Contains the users data"""
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    full_name = Column(String)
    is_active = Column(Boolean, default=True)

    documents = relationship("Document", back_populates="owner")


class Document(Base):
    """Contains documents"""
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    content = Column(Text)
    owner_id = Column(Integer, ForeignKey("users.id"))
    created_at = Column(DateTime, default=datetime.now())

    owner = relationship("User", back_populates="documents")
