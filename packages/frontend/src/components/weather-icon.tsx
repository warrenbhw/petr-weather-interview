import { WiCloudy, WiRain, WiSnow, WiDaySunny } from 'react-icons/wi'

export type WeatherCondition = 'sunny' | 'cloudy' | 'rainy' | 'snowy'

interface WeatherIconProps {
  condition: string
}

export function WeatherIcon({ condition }: WeatherIconProps) {
  const iconClass = 'w-32 h-32'

  switch (condition.toLowerCase()) {
    case 'sunny':
      return <WiDaySunny className={`${iconClass} text-yellow-400`} />
    case 'cloudy':
      return <WiCloudy className={`${iconClass} text-gray-400`} />
    case 'rainy':
      return <WiRain className={`${iconClass} text-blue-400`} />
    case 'snowy':
      return <WiSnow className={`${iconClass} text-blue-200`} />
    default:
      return <WiDaySunny className={`${iconClass} text-yellow-400`} />
  }
}
