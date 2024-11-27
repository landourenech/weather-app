'use client';


export default function WeatherCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="weather-card">
      <div className="weather-card-icon">{icon}</div>
      <div className="weather-card-value">{value}</div>
      <div className="weather-card-label">{label}</div>
    </div>
  );
}
