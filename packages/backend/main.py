from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, Any
import uvicorn
import os


# Pydantic models for API types
class WeatherData(BaseModel):
    temperature: int
    condition: str
    message: str


class HealthResponse(BaseModel):
    status: str
    message: str


# Create FastAPI app
app = FastAPI(title="Weather API Backend", version="1.0.0")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health", response_model=HealthResponse)
async def health_check():
    """Health check endpoint"""
    return HealthResponse(status="ok", message="Weather API Backend is running")


@app.get("/api/weather", response_model=WeatherData)
async def get_weather():
    """Weather data endpoint (placeholder)"""
    # TODO: Integrate with real weather API
    return WeatherData(
        temperature=72,
        condition="sunny",
        message="Perfect weather for a walk in the park!",
    )


if __name__ == "__main__":
    port = int(os.getenv("PORT", 3000))
    print(f"Server running on http://localhost:{port}")
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
