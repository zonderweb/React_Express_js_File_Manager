# React Express File Manager

A full-stack file manager application with React frontend and Express.js backend.

## Project Structure

```
react_express_file_m/
├── backend/           # Express.js API server
│   ├── server.js      # Main entry point
│   ├── routes/        # API routes
│   ├── files/         # Managed files directory
│   └── package.json
└── frontend/          # React application (Vite)
    ├── src/
    │   ├── App.jsx    # Main React component
    │   └── main.jsx   # Entry point
    ├── index.html
    └── package.json
```

## Backend

### Installation

```bash
cd backend
npm install
```

### Usage

Start the backend server:

```bash
node server.js
```

The server runs on port `8000`.

### API Endpoints

**GET `/`** - Browse files and folders

Query Parameters:

- `path` (optional) - Relative path from `files/` directory

Example:

```bash
curl http://localhost:8000/
curl http://localhost:8000/?path=api
```

Response:

```json
{
  "path": "api",
  "result": true,
  "files": [
    {
      "name": "info.dat",
      "dir": false,
      "size": 1024
    }
  ]
}
```

### CORS

The backend includes CORS middleware to allow cross-origin requests from the frontend during development.

## Frontend

### Installation

```bash
cd frontend
npm install
```

### Usage

Start the development server:

```bash
npm run dev
```

The frontend runs on `http://localhost:5173` and connects to the backend API at `http://localhost:8000`.

## Running Both Servers

Open two terminals:

```bash
# Terminal 1 - Backend
cd backend
node server.js

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## Technologies

- **Backend:** Node.js, Express.js v5
- **Frontend:** React 18, Vite

## License

ISC
