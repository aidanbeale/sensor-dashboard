import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

import './settings.css';

const Settings = ({ setShowSettings }) => {
  const dispatch = useDispatch()
  const selectAppState = state => state.appState;
  const appState = useSelector(selectAppState);

  const [userInputOrange, setUserInputOrange] = useState(appState.orangeStatusMins);
  const [userInputRed, setUserInputRed] = useState(appState.redStatusMins);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch(name) {
      case "orangeStatus":
        setUserInputOrange(value);
      case "redStatus":
        setUserInputRed(value);
    }
  };

  const updateIndicatorMins = () => {
    dispatch({ type: 'appState/setOrangeStatusMins', payload: userInputOrange});
    dispatch({ type: 'appState/setRedStatusMins', payload: userInputRed});
  };

  return (
    <div className="settings-popup-container">
      <div className="settings-header">
        <h1 className="settings-title">Settings</h1>
        <div className="close-wrapper" onClick={() => setShowSettings(false)}>
          <div className="close-arrow">
            <div className="close-line"/>
            <div className="close-line"/>
          </div>
        </div>
      </div>
      <div className="settings-container">
        <div className="status-options-container">
          <label className="setting-label">Status Indicator:</label>
          <div style={{display: "flex"}}>
            <div className="status-option">
              <div className="orange-status"/>
              <input className="status-input" type="text" name="orangeStatus" defaultValue={appState.orangeStatusMins} onChange={(event) => handleInputChange(event)}></input>
              <label className="status-mins-label">mins</label>
            </div >
            <div className="status-option">
              <div className="red-status"/>
              <input className="status-input" type="text" name="redStatus" defaultValue={appState.redStatusMins} onChange={(event) => handleInputChange(event)}></input>
              <label className="status-mins-label">mins</label>
            </div>
          </div>
        </div>
      </div>
      <div className="settings-footer">
        <button className="settings-submit-button" onClick={() => updateIndicatorMins()}>APPLY</button>
      </div>
    </div>
  );
};

export default Settings;
