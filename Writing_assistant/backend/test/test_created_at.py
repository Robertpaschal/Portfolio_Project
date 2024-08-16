#!/usr/bin/env python3
from datetime import datetime
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError
import os
import sys
sys.path.insert(0, os.path.abspath(
    os.path.join(os.path.dirname(__file__), '..')))
from app.models import Base, Document


DATABASE_URL = "postgresql://root:password@localhost/writing_assistant_db"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

try:
    db = SessionLocal()
    Base.metadata.create_all(bind=engine)

    # Create a test document
    new_document = Document(title="Test Document", content="This is a test.")
    db.add(new_document)
    db.commit()
    db.refresh(new_document)

    print(new_document.created_at)
except SQLAlchemyError as e:
    print(f"An error occurred: {e}")
finally:
    db.close()
