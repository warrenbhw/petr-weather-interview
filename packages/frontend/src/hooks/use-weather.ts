import { useState, useEffect } from 'react'
import { client } from '@/lib/api-client'
import type { WeatherData } from '@/types/api'

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchWeather = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await client.getWeather()
      setWeather(data)
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Unknown error occurred'
      setError(message)
      console.error('Error fetching weather:', error)
    } finally {
      setLoading(false)
    }
  }

  // Check backend health on mount
  useEffect(() => {
    client
      .getHealth()
      .then(() => {
        // Backend is healthy
      })
      .catch((err) => console.error('Backend not available:', err))
  }, [])

  return { weather, loading, error, fetchWeather }
}
