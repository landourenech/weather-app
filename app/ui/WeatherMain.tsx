'use client';

import { Cloud } from 'lucide-react';
import type { WeatherData } from '../lib/type';

export default function WeatherMain({ weather }: { weather: WeatherData }) {
  return (
    <div className="weather-main-container">
      <Cloud className="weather-main-icon" />
      <div className="weather-main-temp">
        {Math.round(weather.current.temperature_2m)}°C
      </div>
      <div className="weather-main-feels-like">
        Feels like {Math.round(weather.current.apparent_temperature)}°C
      </div>
    </div>
  );
}
