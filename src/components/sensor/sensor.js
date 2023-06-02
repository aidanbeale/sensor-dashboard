import React from "react";

import './sensor.css';

const Sensor = () => {
  return (
    <div className="sensor-container">
      <div className="sensor-header">
        <div className="status-indicator" />
        <div>
          <h2>Kitchen</h2>
          <p className="sensor-updated">Last Updated: 5 minutes ago</p>
        </div>
      </div>
      <div className="stats-container">
        <div className="sensor-output-container">
          <div className="sensor-output-name">TEMPERATURE</div>
          <div className="sensor-output">17.9°C</div>
        </div>
        <div className="sensor-output-container">
          <div className="sensor-output-name">HUMIDITY</div>
          <div className="sensor-output">65%</div>
        </div>
      </div>
    </div>
  )
};

export default Sensor;
