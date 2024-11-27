'use client';

import { useEffect, useState } from 'react';
import WeatherHeader from './Header';
import WeatherMain from './WeatherMain';
import WeatherDetails from './WeatherDetails';
import SunriseSunset from './SunriseSunset';
import { fetchWeatherData } from '../lib/api';
import type { WeatherData } from '../lib/type';
import Loading from '../loading'; 
import Error from '../error';      

export default function WeatherDashboard() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  const loadWeather = async () => {
    setLoading(true);
    try {
      const data = await fetchWeatherData();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeather();

    const intervalId = setInterval(() => {
      loadWeather();
    }, 3600000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!weather) {
    return <Error error={undefined} />;
  }

  return (
    <div className="mainCard ">
      <div className="max-w-4xl mx-auto">
        <div className="">
          <div className="weather-header">
            <WeatherHeader />
          </div>
          <div className="weather-details-container">
            <WeatherMain weather={weather} />
            <WeatherDetails weather={weather} />
          </div>
          <SunriseSunset weather={weather} />
        </div>
      </div>
    </div>
  );
}
