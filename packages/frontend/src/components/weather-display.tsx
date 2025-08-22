import { WeatherIcon } from '@/components/weather-icon'
import type { WeatherData } from '@/types/api'

interface WeatherDisplayProps {
  weather: WeatherData
}

export function WeatherDisplay({ weather }: WeatherDisplayProps) {
  return (
    <div className='animate-in w-full space-y-6'>
      <div className='flex justify-center'>
        <WeatherIcon condition={weather.condition} />
      </div>

      <div className='space-y-2 text-center'>
        <p className='text-6xl font-bold text-gray-800'>
          {weather.temperature}°F
        </p>
        <p className='text-2xl capitalize text-gray-600'>{weather.condition}</p>
      </div>

      <div className='rounded-xl bg-gray-50 p-6'>
        <p className='text-center text-lg text-gray-700'>{weather.message}</p>
      </div>
    </div>
  )
}
