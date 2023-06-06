import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from 'react-redux'

import Chart from "../chart/chart";

import './sensor.css';

const Sensor = ({ sensorData, showSettings }) => {
  const dispatch = useDispatch()
  const selectTempState = state => state.tempState
  const tempState = useSelector(selectTempState)
  
  const [minsSince, setMinsSince] = useState(0);
  const [time, setTime] = useState(Date.now());
  const [extendData, setExtendData] = useState(false);
  const [indicatorColour, setIndicatorColour] = useState("#4a515f");

  let latestUpdate = sensorData.data[sensorData.data.length -1];

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    
    const ts = new Date().getTime();
    const currentTime = (ts-(ts%1000))/1000;
    const lastUpdateTime = Math.floor((currentTime - (latestUpdate.timestamp_TTL - 86400)) / 60);
    setMinsSince(lastUpdateTime);

    if (minsSince >= 6 && minsSince <= 20) {
      setIndicatorColour("#cb7900");
    } else if (minsSince > 20) {
      setIndicatorColour("#cb0000");
    } else {
      setIndicatorColour("#00CB24");
    }

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const clickOnSensor = () => {
    if (!extendData && !showSettings) {
      setExtendData(true);
      dispatch({ type: 'tempState/updateOpenGraphCount', payload: tempState.openGraphCount + 1});
    } else {
      setExtendData(false);
      dispatch({ type: 'tempState/updateOpenGraphCount', payload: tempState.openGraphCount - 1});
    }
  }

  return (
    <div className="sensor-container" onClick={clickOnSensor}>
      <div className="sensor-header">
        <div className="status-indicator" style={{backgroundColor : indicatorColour}}/>
        <div>
          <h2>{sensorData.name}</h2>
          <p className="sensor-updated">Last Updated: {minsSince} minute{minsSince !== 1 ? 's' : ''} ago</p>
        </div>
      </div>
      <div className={'stats-container' + (extendData ? ' stats-container-extend' : '')}>
        <div className="sensor-output-container">
          <div className="sensor-output-name">TEMPERATURE</div>
          <div className={'sensor-output' + (extendData ? ' sensor-output-extend' : '')}>{latestUpdate.temperature}°C</div>
        </div>
        <div className="sensor-output-container">
          <div className="sensor-output-name">HUMIDITY</div>
          <div className={'sensor-output' + (extendData ? ' sensor-output-extend' : '')}>{latestUpdate.humidity}%</div>
        </div>
      </div>
      {
        extendData ? (
          <CSSTransition in={extendData} timeout={0} className="my-node" unmountOnExit appear>
            <Chart sensorData={sensorData} />
          </CSSTransition>
        ) : null
      }
    </div>
  )
};

export default Sensor;
