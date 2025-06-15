const WeatherDisplay = ({ temperature, city, error }) => {
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  if (temperature !== null) {
    return <h2>Current temperature in {city}: {temperature}°C</h2>;
  }

  return <p>Enter a city to see the weather.</p>;
};




export default WeatherDisplay;
