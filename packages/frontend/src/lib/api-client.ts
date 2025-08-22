import type { WeatherData, HealthResponse } from '../types/api'

const API_BASE_URL = 'http://localhost:3000'

class ApiClient {
  private async fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      },
      ...options
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  }

  async getHealth(): Promise<HealthResponse> {
    return this.fetchJson<HealthResponse>('/health')
  }

  async getWeather(): Promise<WeatherData> {
    return this.fetchJson<WeatherData>('/api/weather')
  }
}

export const client = new ApiClient()
