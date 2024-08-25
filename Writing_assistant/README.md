# Intelligent Writing Assistant

## Overview
The Intelligent Writing Assistant is a web application designed to help users with various writing tasks, including essays, stories, poems, and business reports. The app provides features such as auto-completion, grammar and style checking, plagiarism detection, and content summarization. The backend is built using Python and FastAPI, and the frontend uses JavaScript with a framework like React.js.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Usage](#usage)
  - [Running the Backend](#running-the-backend)
  - [Running the Frontend](#running-the-frontend)
- [API Documentation](#api-documentation)
- [Contributors](#contributors)
- [License](#license)

## Features

- **Content Generation**: Uses Gemini API to generate content for users.
- **Writing Space**: Users can manually write and bring their creative idas to life.
- **Content Summarization**: Summarizes long documents into concise summaries.
- **Grammar and Style Checking**: Enhances grammar, style, and readability of the content.
- **Plagiarism Detection**: Ensures the originality of the content.


## Project Structure
This is the detailed structure of the files used in this directory in creating an Intelligent Writing Assistant app.

```plaintext
intelligent-writing-assistant/
├── backend/
│   ├── alembic/
│   │   ├── versions/
│   │   └── env.py
│   │   └── script.py.mako
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── database.py
│   │   ├── services/
│   │   │   ├── __init__.py
│   │   │   ├── writing_service.py
│   │   ├── routers/
│   │   │   ├── __init__.py
│   │   │   ├── auth.py
│   │   │   ├── writing.py
│   │   ├── utils/
│   │       ├── __init__.py
│   │       ├── security.py
|   |       |-- gemini.py
|   |       |-- redis_util.py
|   |       |-- style_grammar.py
|   |--- tests/
|   |   |--- test_app.py
|   |   |--- test_created_at.py
|   |   |--- test_gemini.py
|   |   |--- test_simple_gemini.py
│   ├── .env.local
│   ├── requirements.txt
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── alembic.ini
├── frontend/
│   ├── public/
│   │   ├── index.html
│   ├── src/
|   |   |-- assets/
|   |   |     |-- lib.js
|   |   |     |-- images/
|   |   |           |-- image1.png
|   |   |           |-- image4.png       
|   |   |           |-- landingpage_icon.png
|   |   |           |-- logo-black.png
|   |   |           |-- logo-white.png
│   │   ├── components/
|   |   |   |-- DropDownItem.js
|   |   |   |-- DropdownList.js
|   |   |   |-- HistoryCard.js
|   |   |   |-- SignOutButton.js
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   ├── TextEditor.js
│   │   │   ├── SuggestionsList.js
|   |   |   |-- Updates.js
|   |   |   |-- body.js
|   |   |   |-- custom_corousel.js
|   |   |   |-- dashboard_mini_navbar2.js
|   |   |   |-- dashboard_navbar.js
|   |   |   |-- dropdownmenu.js
|   |   |   |-- sidebar1.js
|   |   |   |-- stars.js
|   |   |-- hooks/
|   |   |   |-- Auth.js
|   |   |   |-- dashboardAuthStatus.js
|   |   |   |-- dashboardWithAuth.js
|   |   |   |-- usemodal.js
|   |   |   |-- userAuth.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Dashboard.js
│   │   │   ├── SignOut.js
│   │   │   ├── Signin.js
│   │   │   ├── Signup.js
│   │   ├── redux/
│   │   │   ├── Actions/
|   |   |   |   |-- cardActiontypes.js
|   |   |   |   |-- cardCreators.js
|   |   |   |   |-- contentActionTypes.js
|   |   |   |   |-- textEditorCreator.js
|   |   |   |   |-- contentActionCreators.js
|   |   |   |   |-- textEditorActiontypes.js
│   │   │   ├── Store/
|   |   |   |   |-- store.js
│   │   │   ├── Reducers/
|   |   |   |   |-- Authreducers.js
|   |   |   |   |-- RootReducers.js
|   |   |   |   |-- cardReducers.js
|   |   |   |   |-- contentReducers.js
|   |   |   |   |-- textEditorReducer.js
│   │   ├── services/
│   │   │   ├── api.js
|   |   |   |-- textEditorapi.js
|   |   |-- styles/
|   |   |   |-- corousel.css  
│   │   ├── App.js
│   │   ├── index.js
|   |   |-- index.css
│   ├── .env
|   |-- .gitignore
|   |-- package-lock.json
|   |-- package.json
|   |-- postcss.config.js
|   |-- tailwind.config.js
|   |-- vite.config.js
│   ├── Dockerfile
│   ├── docker-compose.yml
├── .gitignore
|-- LICENSE
└── README.md
```

## Installation
## Backend
- **Clone the repository**<br/>
```sh
git clone https://github.com/Robertpaschal/intelligent-writing-assistant.git

cd intelligent-writing-assistant/backend
```
- **Create a virtual environment**<br/>
```sh
python3 -m venv venv
source venv/bin/activate
```
- **Install the dependencies**<br/>
```sh
pip install -r requirements.txt
```
- **Set up the environment variables**<br/>
+ Update the environment variables `.env` file with your won configurations such as database credentials, API keys for third-party services, etc
- **Start the backend server**<br/>
```sh
uvicorn app.main:app --reload or 
python3 -m app.main
```
The backend server will start on `http://localhost:8000`

## Frontend
- **Navigate to the fronend directory**<br/>
```sh
cd ../frontend
```
- **Install the dependencies**<br/>
```sh
npm install
```
- **Set up the environment varaibles**<br/>
+ Copy the `.env` file and update the necessary configurations, such as the backend API URL
- **Start the frontend development server**<br/>
```sh
npm start
```
The fronend server will start on `http://localhost:3000`

## Usage
## Running the Backend
To run the backend server, follow the installation steps for the backend, and ensure the server is running at `http://localhost:8000.` You can interact with the backend API through the frontend or using tools like curl or Postman.

## Running the Frontend
To run the frontend server, follow the installation steps for the frontend. The frontend will connect to the backend API at `http://localhost:8000` by default. You can access the frontend interface by navigating to `http://localhost:3000` in your web browser.

## API Documentation

The API documentation is available through the FastAPI auto-generated docs. Once the backend server is running, you can access the documentation at:

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`<br/>

These endpoints provide detailed information about the API routes, request/response formats, and models.

- **Authentication Endpoints**

+ [x] `POST /auth/signup`
- **Description**: Registers a new user in the system.
- **Request Body**:
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```
- **Response:**
```json
{
  "id": "integer",
  "username": "string",
  "email": "string"
}
```
- **Error Responses**:
  - **400 Bad Request**: If the request is missing required fields or contains invalid data.
  - **409 Conflict**: If a user with the same email already exists.

+ [x] `POST /auth/login`
- **Description**: Authenticates a user and returns a JWT token.
- **Request Body**:
```json
{
  "email": "string",
  "password": "string"
}
```
- **Response**:
```json
{
  "token": "string"
}
```
- **Error Responses**:
  - **401 Unauthorized**: If the credentials are invalid.

+ [x] `POST /auth/logout`
- **Description**: Logs out the user by invalidating the JWT token.
- **Headers**:
  - `Authorization: Bearer <JWT Token>`
- **Response**:
  - **204 No Content**: Indicates the user was successfully logged out.
- **Error Responses**:
  - **401 Unauthorized**: If the JWT token is invalid or missing.


- **Writing Assistant Endpoints**

+ [x] `POST /writing/documents`
- **Description**: Uploads a new document for analysis, storage, and processing.
- **Request Body:**
```json
{
  "title": "string",
  "content": "string"
}
```
- **Response:**
```json
{
  "document_id": "string",
  "title": "string",
  "content": "string",
  "created_at": "string",
  "updated_at": "string"
}
```
- **Error Responses:**
  - **400 Bad Request:** If the title or content is missing or empty.

+ [x] `GET /writing/documents`
- **Description:** Retrieves a list of all documents associated with the authenticated user.
- **Headers:**
  - `Authorization: Bearer <JWT Token>`
- **Response:**
```json
{
  "documents": [
    {
      "document_id": "string",
      "title": "string",
      "created_at": "string"
    }
  ]
}
```
- **Error Responses:**
  - **401 Unauthorized:** If the JWT token is invalid or missing.

+ [x] `GET /writing/documents/{document_id}`
- **Description:** Retrieves the details of a specific document by its ID.
- **Headers:**
  - `Authorization: Bearer <JWT Token>`
- **Path Parameters:**
  - `document_id`: The ID of the document to retrieve.
- **Response:**
```json
{
  "document_id": "string",
  "title": "string",
  "content": "string",
  "created_at": "string",
  "updated_at": "string"
}
```
- **Error Responses:**
  - **401 Unauthorized:** If the JWT token is invalid or missing.
  - **404 Not Found:** If the document with the specified ID does not exist.

+ [x] `POST /writing/generate`
- **Description:** Generates content based on a prompt or topic provided by the user.
- **Request Body:**
```json
{
  "prompt": "string",
  "title": "string"
}
```
- **Response:**
```json
{
  "text": "string"
}
```
- **Error Responses:**
  - **400 Bad Request:** If the prompt or title is missing or empty.

**Error Responses**
For all endpoints, you may encounter the following error responses:

- **400 Bad Request:** Returned when the request parameters are invalid or missing.
  - **Response:**
```json
{
  "detail": "string"
}
```
- **401 Unauthorized:** Returned when the user is not authenticated or the token is invalid.
  - **Response:**
```json
{
  "detail": "string"
}
```
- **404 Not Found:** Returned when the requested resource does not exist.
  - **Response:**
```json
{
  "detail": "string"
}
```
## Contributors
This Web Application was built by a team of four developers:<br/>
- **Nnamani Robert Odinaka**
  - *email*: nnamani.odinakarobert@gmail.com
  - *role*:  Lead project developer and Backend dev

- **Doreen Ikilai**
  - *email*: dornkaizen@gmail.com
  - *role*: Lead Frontend dev

- **Garret Akpale**
  - *email*: garretakpale@gmail.com 
  - *role*: Backend dev

- **Okoli Chisom Daniel**
  - *email*: chisomd90@gmail.com
  - *role*: Backend dev 

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.