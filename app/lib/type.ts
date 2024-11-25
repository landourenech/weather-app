export interface WeatherData {
  current :{
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    is_day: number;
  };
  daily: {
    sunrise: string[];
    sunset: string[]
  
  }
}