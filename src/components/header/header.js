import React from "react";

import RefreshButton from "../refreshButton/refreshButton";

import './header.css';

const Sensor = () => {
  return (
    <div className="header-container">
      <h1 className="header-title">Sensor Dashboard</h1>
      <RefreshButton />
    </div>
  )
};

export default Sensor;
