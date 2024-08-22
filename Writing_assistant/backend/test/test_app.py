#!/usr/bin/env python3
import logging
import sys
import os
import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from redis import Redis

# Add the project root directory to the sys.path
sys.path.insert(0, os.path.abspath(
    os.path.join(os.path.dirname(__file__), '..')))

from app import main
from app.database import Base, get_db
from app.models import User, Document
from app.utils.security import get_password_hash

logging.basicConfig(level=logging.DEBUG)
# Setup for testing with PostgreSQL
SQLALCHEMY_DATABASE_URL = "postgresql://root:password@localhost/writing_assistant_db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
TestingSessionLocal = sessionmaker(
    autocommit=False, autoflush=False, bind=engine)

# Create all tables in the test database
Base.metadata.create_all(bind=engine)

# Initialize Redis client for tests
redis_client = Redis(host='localhost', port=6379, db=0, decode_responses=True)


# Dependency override
def override_get_db():
    """Override get_db to use the testing database"""
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()


app = main.app
app.dependency_overrides[get_db] = override_get_db
client = TestClient(app)


@pytest.fixture(scope="function")
def test_db():
    """Set up the test database"""
    # Create tables
    Base.metadata.create_all(bind=engine)
    yield
    # Drop tables after each test
    Base.metadata.drop_all(bind=engine)


@pytest.fixture
def token(test_db):
    """Generate a valid token"""
    db = TestingSessionLocal()

    # Clear existing data
    db.execute(text(
        'TRUNCATE TABLE users RESTART IDENTITY CASCADE'))
    user = User(
        email="testuser@example.com",
        full_name="Test User",
        hashed_password=get_password_hash("password123")
    )
    db.add(user)
    db.commit()
    db.refresh(user)

    response = client.post("/auth/login", data={
        "username": "Test User", "password": "password123"})
    token = response.json().get("access_token")
    db.close()
    return token


def test_root():
    """Tests the base endpoint"""
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {
        "message": "Welcome to the Intelligent Writing Assistant API"}


def test_signup():
    """Tests the signup endpoint"""
    response = client.post("/auth/signup", json={
        "email": "signupuser@example.com",
        "full_name": "Signup User",
        "password": "signup123"
    })
    assert response.status_code == 201
    assert response.json()["email"] == "signupuser@example.com"


def test_login(test_db):
    """Tests login endpoint"""
    response = client.post(
        "/auth/login", data={
            "username": "Signup User", "password": "signup123"})
    assert response.status_code == 200
    assert "access_token" in response.json()


def test_create_document(token):
    """Tests document creation endpoint"""
    response = client.post("/writing/documents/", json={
        "title": "Test Document",
        "content": "This is a test document."
    }, headers={"Authorization": f"Bearer {token}"})
    assert response.status_code == 200
    assert response.json()["title"] == "Test Document"


def test_content_generation(token):
    """Tests content generation endpoint"""
    response = client.post("/writing/generate", json={
        "prompt": "Generate some content.",
        "title": "Custom Title for Generated Content"
    }, headers={"Authorization": f"Bearer {token}"})
    assert response.status_code == 200

    # Retrieve the document to verify it was stored with the custom title
    db = TestingSessionLocal()
    user = db.query(User).filter(User.full_name == "Test User").first()
    documents = db.query(Document).filter(Document.owner_id == user.id).all()

    # Ensure there is at least one document associated with the user
    assert len(documents) > 0

    # Check if the most recent document matches
    # the generated content and custom title
    latest_document = documents[-1]
    assert latest_document.title == "Custom Title for Generated Content"

    # Clean up
    db.close()


def test_read_document(token):
    """Tests the read document endpoint"""
    # First create a document
    create_response = client.post("/writing/documents/", json={
        "title": "Read Test Document",
        "content": "This document will be read"
    }, headers={"Authorization": f"Bearer {token}"})
    document_id = create_response.json()["id"]

    # Then read the document
    response = client.get(
        f"/writing/documents/{document_id}", headers={
            "Authorization": f"Bearer {token}"})
    assert response.status_code == 200
    assert response.json()["title"] == "Read Test Document"


def test_list_documents(token):
    """Tests list documents endpoint"""
    response = client.get(
        "/writing/documents/", headers={"Authorization": f"Bearer {token}"})
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_logout(token):
    """Tests the logout endpoint"""
    # Call the logout endpoint
    response = client.post("/auth/logout", headers={"Authorization": f"Bearer {token}"})

    assert response.status_code == 200
    assert response.json()["message"] == "Successfully logged out"

    # Verify that the token has been removed from Redis
    assert redis_client.get(token) is None
