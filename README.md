# URL Shortener Application

This project is a simple URL shortener application built with a MERN (MongoDB, Express, React, Node.js) stack and containerized using Docker. It allows users to input a long URL and get a shortened version.

## Features

- **URL Shortening:** Shorten long URLs into short, shareable links.
- **Redirection:** Users are redirected to the original URL when they visit the short URL.
- **Containerization:** Both frontend and backend are containerized with Docker.

## Project Structure

```sh
url-shortener-app/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── urlController.js
│   │   ├── models/
│   │   │   └── Url.js
│   │   ├── routes/
│   │   │   └── urlRoutes.js
│   │   ├── config/
│   │   │   └── db.js
│   │   └── app.js
│   ├── .env
│   ├── Dockerfile
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── UrlForm.jsx
│   │   │   └── UrlList.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .env.example
│   ├── .gitignore
│   ├── index.html
│   ├── Dockerfile
│   ├── package.json
│   └── package-lock.json
│
├── docker-compose.yml
└── README.md
```


## Prerequisites

- Docker installed on your machine.
- Node.js and MongoDB (if not using Docker).


## Getting Started

### 1. Clone the repository:

```sh
git clone https://github.com/ayushhhthakur/url-shortener-app.git
cd url-shortener-app
```


### 2. Set up environment variables:


 - Create a .env file in the backend directory with the following content:


```sh
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
PORT=5000
```


### 3. Start the application with docker

```sh
docker-compose up --build
```


- This command will build the Docker images and start the containers.

### 4. Access the application:

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### 5. Usage

- Enter a long URL on the homepage and click "Shorten" to generate a short URL.

- Click the generated short URL to be redirected to the original long URL.