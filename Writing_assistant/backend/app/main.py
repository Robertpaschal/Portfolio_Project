#!/usr/bin/env python3
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from .utils.redis_util import get_redis_client
from .database import engine, Base
from .routers import auth, writing
import logging

# Initialize Redis
redis_client = get_redis_client()

Base.metadata.create_all(bind=engine)

# Create the FastAPI app
app = FastAPI()

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the routers
app.include_router(auth.router)
app.include_router(writing.router)


# Define a simple root endpoint
@app.get("/")
def read_root():
    """defines the base route for the app"""
    return {
        "message": "Welcome to the Intelligent Writing Assistant API"
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
