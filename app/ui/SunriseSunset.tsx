'use client';

import { Sunrise, Sunset } from 'lucide-react';
import { formatTime } from '../lib/utils';
import type { WeatherData } from '../lib/type';

export default function SunriseSunset({ weather }: { weather: WeatherData }) {
  return (
    <div className="sunrise-sunset-container">
      <div className="sunrise-sunset-box">
        <Sunrise className="sunrise-sunset-icon" />
        <div className="sunrise-sunset-info">
          <div className="time">{formatTime(weather.daily.sunrise[0])}</div>
          <div className="label">Sunrise</div>
        </div>
      </div>
      <div className="sunrise-sunset-box">
        <Sunset className="sunrise-sunset-icon" />
        <div className="sunrise-sunset-info">
          <div className="time">{formatTime(weather.daily.sunset[0])}</div>
          <div className="label">Sunset</div>
        </div>
      </div>
    </div>
  );
}
