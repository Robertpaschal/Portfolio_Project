curl -X POST \
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAjWkjvmsEOna6Qz7wvhSzDylpAgtq_phA' \
  -H 'Content-Type: application/json' \
  -d '{
    "prompt": "Write a sonnet about programmers life but make it rhyme."
  }'
