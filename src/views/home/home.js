import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import Header from "../../components/header/header";
import Sensor from '../../components/sensor/sensor';
import Settings from '../../components/settings/settings';

import './home.css';
import fetchSensorData from "../../utils/fetchSensorData";
import filterSensorData from "../../utils/filterSensorData";

const Home = () => {
  const dispatch = useDispatch()
  const selectAppState = state => state.appState
  const appState = useSelector(selectAppState)
  const selectTempState = state => state.tempState
  const tempState = useSelector(selectTempState)

  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (appState.rawSensorData.length === 0) {
      fetchSensorData()
        .then((fetchedData) => {
          dispatch({ type: 'appState/setRawSensorData', payload: fetchedData });
        });
    } else if (appState.filteredSensorData.length === 0) {
      const filteredData = filterSensorData(appState.rawSensorData);
      dispatch({ type: 'appState/setFilteredSensorData', payload: filteredData });
    }
  });

  return (
    <div className="home-container">
      <Header showSettings={showSettings} setShowSettings={setShowSettings} />
      {showSettings ? <Settings setShowSettings={setShowSettings}/> : null}
      <div className={"sensor-list-container" + (showSettings ? " blur" : "")}>
        {appState.filteredSensorData ? appState.filteredSensorData.map((sensorData, key) => {
          return <Sensor key={key} sensorData={sensorData} showSettings={showSettings}/>
        }
        ) : null}
      </div>
    </div>
  )
};

export default Home;
