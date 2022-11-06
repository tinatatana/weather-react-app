import React from "react";
import FormatedDate from "./FormatedDate";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <div className="row">
        <h1>{props.data.city}</h1>
        <div className="col-6">
          <ul>
            <li>
              {" "}
              <FormatedDate date={props.data.date} />{" "}
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              {" "}
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="img-fluid"
              />{" "}
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Temperature: {Math.round(props.data.temperature)}°C</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
