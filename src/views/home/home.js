import React from "react";

import Header from "../../components/header/header";
import Sensor from '../../components/sensor/sensor';

import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="sensor-list-container">
        <Sensor />
        <Sensor />
        <Sensor />
        <Sensor />
        <Sensor />
      </div>
    </div>
  )
};

export default Home;
