import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
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
              <div className="float-left">
                <WeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Temperature:{" "}
              <WeatherTemperature celsius={props.data.temperature} />
            </li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
