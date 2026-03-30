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
└── frontend/          # React application (coming soon)
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

## Technologies

- **Backend:** Node.js, Express.js v5
- **Frontend:** React (planned)

## License

ISC
