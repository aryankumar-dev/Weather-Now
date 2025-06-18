import { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';
function App() {

  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState('');
  const [city, setCity] = useState('');

  const getWeather = async (cityName) => {
    try {
      const res = await fetch(`http://localhost:3000/weather?city=${cityName}`);
      if (!res.ok) throw new Error('Failed to fetch weather');
      const temp = await res.text();
      setTemperature(temp);
      setCity(cityName);
      setError('');

     await fetch('http://localhost:3000/api/v1/add/addweather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        city: cityName,
        temprature: temp
      })
    });
    } catch (err) {
      setTemperature(null);
      setCity('');
      setError('Unable to fetch weather. Please try again.');
    }
  };

  return (
    <div className='app-container' >
      <h1>Weather App</h1>
      <WeatherForm onSearch={getWeather} />
      <WeatherDisplay temperature={temperature} city={city} error={error} />
    </div>
  );
}

export default App;




