import { Cloud } from 'lucide-react';
import type { WeatherData } from '../lib/type';

export default function WeatherMain({ weather }: { weather: WeatherData }) {
  return (
    <div className="text-center p-6 bg-white/5 rounded-2xl">
      <Cloud className="w-16 h-16 mx-auto mb-4" />
      <div className="text-6xl font-bold mb-2">
        {Math.round(weather.current.temperature_2m)}°C
      </div>
      <div className="text-xl opacity-75">
        Feels like {Math.round(weather.current.apparent_temperature)}°C
      </div>
    </div>
  );
}