// API types matching the FastAPI backend
export interface WeatherData {
  temperature: number
  condition: string
  message: string
}

export interface HealthResponse {
  status: string
  message: string
}
