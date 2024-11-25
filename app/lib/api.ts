import type { WeatherData } from './type';

export async function fetchWeatherData(): Promise<WeatherData> {
  const response = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=56.9496&longitude=24.1052&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,wind_direction_10m,is_day&daily=sunrise,sunset&timezone=auto'
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  return response.json();
}