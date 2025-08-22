# Weather Interview App

A monorepo containing a React frontend and FastAPI backend for a weather application.

## Tech Stack

- **Frontend**: React + Vite + TypeScript + TailwindCSS + Vercel AI SDK
- **Backend**: FastAPI + Python + uv
- **Runtime**: Bun (frontend), Python (backend)

## Project Structure

```
weather-interview/
├── packages/
│   ├── frontend/     # React frontend application
│   └── backend/      # FastAPI backend API
└── package.json      # Root monorepo configuration
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

1. **Bun** (for frontend):

```bash
curl -fsSL https://bun.sh/install | bash
```

2. **uv** (for Python backend):

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

3. **Python 3.11+** (managed by uv)

### Installation

1. **Install frontend dependencies** (from the root directory):

```bash
bun install
```

2. **Install backend dependencies** (Python will be managed automatically by uv):

```bash
cd packages/backend
uv sync
```

### Development

To run both the frontend and backend in development mode:

```bash
bun run dev
```

This will start:

- Frontend at http://localhost:5173
- Backend at http://localhost:3000

You can also run them separately:

```bash
# Run only the backend
bun run dev:backend

# Run only the frontend
bun run dev:frontend
```

### Building for Production

```bash
bun run build
```

## API Endpoints

The FastAPI backend provides the following endpoints:

- `GET /health` - Health check endpoint
- `GET /api/weather` - Weather data endpoint (placeholder)
- `GET /docs` - Interactive API documentation (Swagger UI)
- `GET /redoc` - Alternative API documentation

## Next Steps

1. Implement the National Weather Service API integration in the backend
2. Create React components for weather display
3. Set up the AI recommendations using Vercel AI SDK
4. Add proper error handling and loading states
