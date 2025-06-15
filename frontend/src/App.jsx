import { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState('');
  const [city, setCity] = useState('');

  const getWeather = async (cityName) => {
    try {
      const res = await fetch(`http://localhost:3000/weather?city=${cityName}`);
      if (!res.ok) throw new Error('Failed to fetch weather');
      const temp = await res.text(); // because your backend sends plain text
      setTemperature(temp);
      setCity(cityName);
      setError('');
    } catch (err) {
      setTemperature(null);
      setCity('');
      setError('Unable to fetch weather. Please try again.');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Weather App</h1>
      <WeatherForm onSearch={getWeather} />
      <WeatherDisplay temperature={temperature} city={city} error={error} />
    </div>
  );
}

export default App;
