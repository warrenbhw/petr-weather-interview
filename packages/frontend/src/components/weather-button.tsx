import { FaThermometerHalf, FaSpinner } from 'react-icons/fa'

interface WeatherButtonProps {
  onClick: () => void
  loading: boolean
}

export function WeatherButton({ onClick, loading }: WeatherButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className='flex transform items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600
               px-8 py-3 font-semibold text-white shadow-lg transition-all
               duration-200 hover:scale-105 hover:from-blue-600
               hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100'
    >
      {loading ? (
        <>
          <FaSpinner className='animate-spin' />
          Loading...
        </>
      ) : (
        <>
          <FaThermometerHalf className='text-xl' />
          Get Weather
        </>
      )}
    </button>
  )
}
