import React from "react";
import "./currentWeather.css";


const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Belgrade</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="paramater-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="paramater-label">Feels Like</span>
            <span className="paramater-value">22°C</span>
          </div>
          <div className="parameter-row">
            <span className="paramater-label">Wind</span>
            <span className="paramater-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="paramater-label">Humidity</span>
            <span className="paramater-value">22%</span>
          </div>
          <div className="parameter-row">
            <span className="paramater-label">Pressure</span>
            <span className="paramater-value">22 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
