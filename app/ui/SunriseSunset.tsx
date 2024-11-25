import { Sunrise, Sunset } from 'lucide-react';
import { formatTime } from '../lib/utils';
import type { WeatherData } from '../lib/type';

export default function SunriseSunset({ weather }: { weather: WeatherData }) {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="flex items-center justify-center gap-4 bg-white/5 p-6 rounded-2xl">
        <Sunrise className="w-8 h-8" />
        <div>
          <div className="text-2xl font-bold">
            {formatTime(weather.daily.sunrise[0])}
          </div>
          <div className="opacity-75">Sunrise</div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 bg-white/5 p-6 rounded-2xl">
        <Sunset className="w-8 h-8" />
        <div>
          <div className="text-2xl font-bold">
            {formatTime(weather.daily.sunset[0])}
          </div>
          <div className="opacity-75">Sunset</div>
        </div>
      </div>
    </div>
  );
}