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
    <div className="bg-white/5 p-4 rounded-xl text-center">
      <div className="flex justify-center mb-2">{icon}</div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm opacity-75">{label}</div>
    </div>
  );
}