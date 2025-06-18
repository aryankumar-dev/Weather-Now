const WeatherDisplay = ({ temperature, city, error }) => {
  return (
    <div className="weather-display">
      {error ? (
        <p className="error">{error}</p>
      ) : temperature !== null ? (
        <h2>Current temperature in {city}: {temperature}°C</h2>
      ) : (
        <p>Enter a city to see the weather.</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
