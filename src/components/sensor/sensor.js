import React from "react";

import './sensor.css';

const Sensor = ({ sensorData }) => {
  let latestUpdate = sensorData.data[0];
  const ts = new Date().getTime();

  const currentTime = (ts-(ts%1000))/1000;
  const lastUpdateTime = Math.floor((currentTime - latestUpdate.timestamp_TTL - 86400) / 1000);

  return (
    <div className="sensor-container">
      <div className="sensor-header">
        <div className="status-indicator" />
        <div>
          <h2>{sensorData.name}</h2>
          <p className="sensor-updated">Last Updated: {lastUpdateTime} minutes ago</p>
        </div>
      </div>
      <div className="stats-container">
        <div className="sensor-output-container">
          <div className="sensor-output-name">TEMPERATURE</div>
          <div className="sensor-output">{latestUpdate.temperature}°C</div>
        </div>
        <div className="sensor-output-container">
          <div className="sensor-output-name">HUMIDITY</div>
          <div className="sensor-output">{latestUpdate.humidity}%</div>
        </div>
      </div>
    </div>
  )
};

export default Sensor;
