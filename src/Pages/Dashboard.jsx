import { useState, useEffect } from "react";

const Dashboard = () => {
  const [formData, setFormData] = useState({ city: "" });
  const [coords, setCoords] = useState(null); // lat & lon
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

    setLoading(true);
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${formData.city},&limit=1&appid=${key}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
            console.log(data)
          setCoords({ lat: data[0].lat, lon: data[0].lon, state:data[0].state, country:data[0].country });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching location:", err);
        setError(true)
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
        console.log(weather)
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weather:", err);
        setError(true);
        setLoading(false);
      });
  }, [coords]);

  return (
    <div>
    <div>
        <h3 className="text-danger">Welcome To SkyCast</h3>
        <p className="text-light">A place were the weather of a location is accurately predicted. Note that this app uses API to determine the weather of a given location following the given Latitude and Longitude </p>
    </div>
      <form className="d-flex mb-3" onSubmit={onsubmit} method="get">
        <input
          type="text"
          name="city"
          className="form-control me-2"
          onChange={onchange}
          value={formData.city}
          placeholder="Please Enter City..."
        />
        <button className="btn btn-danger" type="submit">
          Search
        </button>
      </form>

      {loading && <button className="btn btn-dark" type="button" disabled>
  <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status"> Loading weather information......................</span>
</button>}
{error && <div className="alert alert-danger">Sorry Weather report could not be generated, please check your internet connection and try again.</div>}

      {coords && (

         <div className="container bg-light p-3" style={{borderRadius:'5px'}}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="bg-dark coords">
                <h5 className="text-warning">{coords.lat}</h5> 
                <p className="text-danger">Latitude for {formData.city}, {coords.state}, {coords.country}.  </p>
                </div>
                </div>
                <div className="col-lg-6">
                    <div className="bg-dark coords">
                <h5 className="text-warning">{coords.lon}</h5> 
                <p className="text-danger">Logitude for {formData.city}, {coords.state}  {coords.country}.</p>
                </div>
                </div>
               
               <div className="col-lg-12">
               <div className="bg-dark coords">
                {weather && (
                        <div className="text-light">
                        <h3>Weather in {weather.name}</h3>
                        <p>🌡 Temperature: {weather.main.temp} °C</p>
                        <p>☁️ Condition: {weather.weather[0].description}</p>
                        </div>
                    )}
                </div>
               </div>
                
            </div>

         
         </div>
      )}

    </div>
  );
};

export default Dashboard;
