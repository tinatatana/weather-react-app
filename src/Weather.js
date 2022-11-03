import React, { useState } from "react";

import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: "Wednesday, 03.11.2022",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/2580/2580627.png",
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city name"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <h1>{weatherData.city}</h1>
          <div className="col-6">
            <ul>
              <li>{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
              <li>
                {" "}
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  className="img-fluid"
                />{" "}
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Temperature: {Math.round(weatherData.temperature)}°C</li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "752a3b7c84950701295b5755aa7ad901";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
