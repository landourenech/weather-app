export default function WeatherHeader() {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-2">Riga, Latvia</h1>
      <p className="text-xl opacity-90">
        {new Date().toLocaleDateString('fr-FR', {
          weekday: 'long',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </p>
    </div>
  );
}