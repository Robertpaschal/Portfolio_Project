#!/usr/bin/env python3
import sys
import os
import unittest
from unittest.mock import patch, MagicMock

sys.path.insert(0, os.path.abspath(
    os.path.join(os.path.dirname(__file__), '..')))
from app.utils.gemini import generate_content


class TestGeminiGenerateContent(unittest.TestCase):
    """Class testing Gemini API"""
    @patch('app.utils.gemini.genai.GenerativeModel')
    def test_generate_content_success(self, mock_model):
        """Test the generate_content function for a successful API call."""

        # Create a mock instance of the GenerativeModel
        mock_instance = MagicMock()
        mock_model.return_value = mock_instance

        # Mock the genearate_content method
        mock_result = MagicMock()
        mock_result.text = "This is a generated text"
        mock_instance.generate_content.return_value = mock_result

        # Call the function
        prompt = "Write a poem about the ocean"
        response = generate_content(prompt)

        # Assertions
        self.assertEqual(response, "This is a generated text")
        mock_instance.generate_content.assert_called_once_with(prompt)

    @patch('app.utils.gemini.genai.GenerativeModel')
    def test_generate_content_error(self, mock_model):
        """Test the generate_content function when an exception is raised"""

        # Create a mock instance of the GenerativeModel
        mock_instance = MagicMock()
        mock_model.return_value = mock_instance

        # Mock the generate_content method to raise an exception
        mock_instance.generate_content.side_effect = Exception("API error")

        # Call the function
        prompt = "Write a poem about the ocean"
        response = generate_content(prompt)

        # Assetions
        self.assertEqual(response, "")
        mock_instance.generate_content.assert_called_once_with(prompt)


if __name__ == "__main__":
    unittest.main()
