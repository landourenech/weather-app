'use client';

import { useState, useEffect } from 'react';

export default function WeatherHeader() {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleDateString('fr-FR', {
          weekday: 'long',
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    };

    updateTime();

    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="weather-header">
      <h1>Libreville, Gabon</h1>
      <p>{currentTime}</p>
    </header>
  );
}
