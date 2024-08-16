#!/usr/bin/env python3
import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

# Set the API key for the Google Generative AI Library
genai.configure(api_key=GOOGLE_API_KEY)


def generate_content(prompt: str) -> str:
    """generate and return a text completion based on a provided prompt
    using the Google Generative AI Library"""
    try:
        model = genai.GenerativeModel("gemini-1.0-pro-latest")
        result = model.generate_content(prompt)
        response = result.text
        return response
        # completion = result['generated_text'] if
        #  'generated_text' in result else ""
        #  return result
    except Exception as e:
        print(f"Error fetching result: {e}")
        return ""
