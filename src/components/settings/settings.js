import React from "react";

import './settings.css';

const Settings = ({ setShowSettings }) => {
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
      <div className="settings">

      </div>
    </div>
  );
};

export default Settings;
