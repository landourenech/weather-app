import { Droplets, Wind, Navigation, Eye } from 'lucide-react';
import WeatherCard from './WeatherCard';
import { getWindDirection } from '../lib/utils';
import type { WeatherData } from '../lib/type';

export default function WeatherDetails({ weather }: { weather: WeatherData }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <WeatherCard
        icon={<Droplets className="w-8 h-8" />}
        value={`${weather.current.relative_humidity_2m}%`}
        label="Humidity"
      />
      <WeatherCard
        icon={<Wind className="w-8 h-8" />}
        value={`${weather.current.wind_speed_10m.toFixed(1)}`}
        label="Wind Speed (m/s)"
      />
      <WeatherCard
        icon={<Navigation className="w-8 h-8" />}
        value={getWindDirection(weather.current.wind_direction_10m)}
        label="Wind Direction"
      />
      <WeatherCard
        icon={<Eye className="w-8 h-8" />}
        value="10.0"
        label="Visibility (km)"
      />
    </div>
  );
}