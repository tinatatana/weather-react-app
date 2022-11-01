import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city name"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="row">
        <h1>Kyiv</h1>
        <div className="col-6">
          <ul>
            <li>01.11.2022</li>
            <li>Sunny</li>
            <li>
              {" "}
              <img
                src="https://cdn-icons-png.flaticon.com/512/2580/2580627.png"
                alt="sunny"
                className="img-fluid"
              />{" "}
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Temperature: 15°C</li>
            <li>Humidity: 80</li>
            <li>Wind: 10</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
