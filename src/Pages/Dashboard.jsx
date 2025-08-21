import { useState, useEffect } from "react";

const Dashboard = () => {
  const [formData, setFormData] = useState({ city: "" });
  const [coords, setCoords] = useState(null); // lat & lon
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const key = "ba94dc3eec6572ab421b192e6e4e4b0b";

  // handle onchange event
  function onchange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // handle submit event
  function onsubmit(e) {
    e.preventDefault();
    console.log("City:", formData.city);

    setLoading(true);
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${formData.city},ng&limit=1&appid=${key}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setCoords({ lat: data[0].lat, lon: data[0].lon });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching location:", err);
        setLoading(false);
      });
  }

  // fetch weather when coords update
  useEffect(() => {
    if (!coords) return;

    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${key}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weather:", err);
        setLoading(false);
      });
  }, [coords]);

  return (
    <>
      <form className="d-flex mb-3" onSubmit={onsubmit} method="get">
        <input
          type="text"
          name="city"
          className="form-control me-2"
          onChange={onchange}
          value={formData.city}
          placeholder="Enter city..."
        />
        <button className="btn btn-dark" type="submit">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {coords && (
        <p>
          Latitude: {coords.lat}, Longitude: {coords.lon}
        </p>
      )}

      {weather && (
        <div>
          <h3>Weather in {weather.name}</h3>
          <p>🌡 Temp: {weather.main.temp} °C</p>
          <p>☁️ Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </>
  );
};

export default Dashboard;
