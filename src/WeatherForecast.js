import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }
  let apiKey = "752a3b7c84950701295b5755aa7ad901";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Thu</div>{" "}
          <WeatherIcon code="01d" size={36} />{" "}
          <div className="WeatherForecastTemperatures">
            {" "}
            <span className="WeatherForecastTemperature-max"> 19</span>{" "}
            <span className="WeatherForecastTemperature-min"> 10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
