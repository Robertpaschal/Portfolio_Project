import os
import google.generativeai as genai

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Set the API key for the Google Generative AI Library
genai.configure(api_key=GEMINI_API_KEY)

def get_auto_completion(prompt: str) -> str:
        model = genai.GenerativeModel("gemini-1.0-pro-latest")
        result = model.generate_content(prompt)
        completion = result['generated_text'] if 'generated_text' in result else ""
        return completion
    