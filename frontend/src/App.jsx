import { useState } from 'react';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState('');
  const [city, setCity] = useState('');
  const [cityName, setCityName] = useState('');
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState('');
  const [windSpeed, setWindSpeed] = useState(null);

  const getWeather = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/weather?city=${city}`);
      if (!res.ok) throw new Error('Failed to fetch weather');
      const weatherData = await res.json();

      setCityName(city);
      setTemperature(weatherData.main.temp);
      setHumidity(weatherData.main.humidity);
      setDescription(weatherData.weather[0].description);
      setWindSpeed(weatherData.wind.speed);
      setCity('');
      setError('');

      await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/add/addweather`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          city,
          temprature: weatherData.main.temp
        })
      });
    } catch {
      setTemperature(null);
      setHumidity(null);
      setDescription('');
      setWindSpeed(null);
      setCity('');
      setError('Unable to fetch weather. Please try again.');
    }
  };

  return (
    <div className="app-background">
      <div className="weather-card">
        <h1>Weather App</h1>
        <form className="weather-form" onSubmit={getWeather}>
          <input
            className="weather-input"
            type="text"
            value={city}
            placeholder="Enter city name"
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="weather-button" type="submit">Get Weather</button>
        </form>

        <div className="weather-display">
        
          {error ? (
            <p className="error">{error}</p>
          ) : temperature !== null ? (
            <>
              <h2>{cityName.toUpperCase()}</h2>
              <p className="temp">{temperature}°C</p>
              <p>Humidity: {humidity}%</p>
              <p>Condition: {description}</p>
              <p>Wind Speed: {windSpeed} km/h</p>
            </>
          ) : (
            <p>Enter a city to see the weather.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
