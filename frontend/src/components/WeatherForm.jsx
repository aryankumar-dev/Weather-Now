import { useState } from 'react';
import './WeatherForm.css'; // Add this CSS file

function WeatherForm(props) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      props.onSearch(city);
      setCity('');
    }
  };

  return (
    <form className="weather-form" onSubmit={handleSubmit}>
      <input
        className="weather-input"
        type="text"
        value={city}
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="weather-button" type="submit">Get Weather</button>
    </form>
  );
}

export default WeatherForm;
