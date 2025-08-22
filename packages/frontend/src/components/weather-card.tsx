import type { ReactNode } from 'react'

interface WeatherCardProps {
  children: ReactNode
}

export function WeatherCard({ children }: WeatherCardProps) {
  return (
    <div className='overflow-hidden rounded-2xl bg-white shadow-2xl'>
      <div className='bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white'>
        <h2 className='text-center text-2xl font-semibold'>
          Your Local Weather
        </h2>
      </div>

      <div className='p-8'>
        <div className='flex flex-col items-center space-y-8'>{children}</div>
      </div>
    </div>
  )
}
