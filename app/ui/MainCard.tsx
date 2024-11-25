'use client';

import { useEffect, useState } from 'react';
import WeatherHeader from './Header';
import WeatherMain from './WeatherMain';
import WeatherDetails from './WeatherDetails';
import SunriseSunset from './SunriseSunset';
import { fetchWeatherData } from '../lib/api';
import type { WeatherData } from '../lib/type';

export default function WeatherDashboard() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const data = await fetchWeatherData();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadWeather();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
        <div className="text-white text-2xl">Loading weather data...</div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
        <div className="text-white text-2xl">Failed to load weather data</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white shadow-xl">
          <WeatherHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <WeatherMain weather={weather} />
            <WeatherDetails weather={weather} />
          </div>
          <SunriseSunset weather={weather} />
        </div>
      </div>
    </div>
  );
}