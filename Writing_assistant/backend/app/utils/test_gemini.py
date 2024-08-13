#!/usr/bin/env python3
from gemini import generate_content
def test_gemini():
    prompt = "Write a short poem about the ocean."
    completion = generate_content(prompt)
    print("Prompt:", prompt)
    print("Generated text:", completion)

if __name__ == "__main__":
    test_gemini()
    