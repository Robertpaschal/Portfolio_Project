from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import PlainTextResponse
from sqlalchemy.orm import Session
from typing import List
from .. import models, schemas, database
from ..utils.security import get_current_user
from ..utils.gemini import generate_content
import logging
router = APIRouter(
    prefix="/writing",
    tags=["writing"],
)


@router.post("/documents/", response_model=schemas.Document)
def create_document(
    document: schemas.DocumentCreate, db: Session = Depends(
        database.get_db), user: models.User = Depends(get_current_user)):
    """Creates a document for a user and adds it to the user session"""
    db_document = models.Document(
        title=document.title, content=document.content, owner_id=user.id)
    db.add(db_document)
    db.commit()
    db.refresh(db_document)
    return db_document


@router.get("/documents/{document_id}", response_model=schemas.Document)
def read_document(
    document_id: int, db: Session = Depends(
        database.get_db), user: models.User = Depends(get_current_user)):
    """Queries the databse and returns the Document(s)
    associated with the user using the provided ID"""
    db_document = db.query(
        models.Document).filter(
            models.Document.id == document_id,
            models.Document.owner_id == user.id
            ).first()
    if db_document is None:
        raise HTTPException(status_code=404, details="Document not found")
    return db_document


@router.get("/documents/", response_model=List[schemas.Document])
def list_documents(
    skip: int = 0, limit: int = 10, db: Session = Depends(
        database.get_db), user: models.User = Depends(get_current_user)):
    """Returns a list of documents for the current user, with pagination."""
    documents = db.query(models.Document).filter(
        models.Document.owner_id == user.id).offset(skip).limit(limit).all()
    return documents


@router.post("/generate")
def content_generation(
    prompt_request: schemas.PromptRequest,
    db: Session = Depends(database.get_db),
    user: models.User = Depends(get_current_user)):
    """This route uses the Gemini API to generate,
    summarize contents based on  users input.
    The session is stored in the users documents database"""
    try:
        completion = generate_content(prompt_request.prompt)
        response = completion + "\n"

        # Create a document with the generated content and custom title
        document_data = schemas.DocumentCreate(
            title=prompt_request.title, content=response)
        create_document(document=document_data, db=db, user=user)

        return PlainTextResponse(content=response, media_type="text/plain")
    except Exception as e:
        logging.error(f"Error generating content: {e}")
        raise HTTPException(status_code=500, detail=str(e))
