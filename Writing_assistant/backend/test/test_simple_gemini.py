#!/usr/bin/env python3
import sys
import os

sys.path.insert(0, os.path.abspath(
    os.path.join(os.path.dirname(__file__), '..')))
from app.utils.gemini import generate_content


def test_gemini():
    """Simple test for the Gemini API"""
    prompt = "Write a short poem about the ocean."
    completion = generate_content(prompt)
    print("Prompt:", prompt)
    print("Generated text:", completion)


if __name__ == "__main__":
    test_gemini()
