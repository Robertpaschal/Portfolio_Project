from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import models, schemas, database
from ..utils.security import get_current_user
from ..utils.gemini import generate_content
import logging
router = APIRouter(
    prefix="/writing",
    tags=["writing"],
)

@router.post("/documents/", response_model=schemas.Document)
def create_document(document: schemas.DocumentCreate, db: Session = Depends(database.get_db), user: models.User = Depends(get_current_user)):
    db_document = models.Document(title=document.title, content=document.content, owner_id=user.id)
    db.add(db_document)
    db.commit()
    db.refresh(db_document)
    return db_document

@router.get("/documents/{document_id}", response_model=schemas.Document)
def read_document(document_id: int, db:Session = Depends(database.get_db), user: models.User = Depends(get_current_user)):
    db_document = db.query(models.Document).filter(models.Document.id == document_id, models.Document.owner_id == user.id).first()
    if db_document is None:
        raise HTTPException(status_code=404, details="Document not found")
    return db_document

@router.post("/generate")
def autocomplete(prompt_request: schemas.PromptRequest):
    try:
        completion = generate_content(prompt_request.prompt)
        return {"completion": completion}
    except Exception as e:
        logging.error(f"Error generating content: {e}")
        raise HTTPException(status_code=500, detail=str(e))
