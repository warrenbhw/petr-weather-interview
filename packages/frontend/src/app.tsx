import { useWeather } from '@/hooks/use-weather'
import {
  Layout,
  WeatherCard,
  WeatherButton,
  WeatherDisplay
} from '@/components'
import '@/app.css'

function App() {
  const { weather, loading, error, fetchWeather } = useWeather()

  return (
    <Layout>
      <WeatherCard>
        <WeatherButton onClick={fetchWeather} loading={loading} />

        {error && (
          <div className='w-full rounded-lg border border-red-200 bg-red-50 p-4'>
            <p className='text-center text-red-700'>{error}</p>
          </div>
        )}

        {weather && <WeatherDisplay weather={weather} />}
      </WeatherCard>
    </Layout>
  )
}

export default App
