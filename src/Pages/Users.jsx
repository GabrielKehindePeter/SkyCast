import { useEffect, useState } from "react";

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const lat = 6.4694716;
  const lon = 3.5623861;
  const key = "ba94dc3eec6572ab421b192e6e4e4b0b";

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching weather:", err));
  }, []);

  // Track state updates
  useEffect(() => {
    console.log("Updated weather:", weather);
  }, [weather]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherApp;
