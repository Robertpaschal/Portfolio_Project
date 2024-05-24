from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from .database import engine, Base
from .routers import auth, writing
import logging

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

#Define a simple root endpoint
@app.get("/")
def read_root():
    return {
        "message": "Welcome to the Intelligent Writing Assistant API"
    }


if __name__=="__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)