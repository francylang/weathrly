import React from 'react';
import './MobileDay.css'

const MobileDay = () => {

 return (
    <div className="mobileCard">
          <div className="topCard">
            <h1 className="city">city</h1>
            <h2 className="currentTime">time</h2>
          </div>
          <div className="middleCard">
            <p className="currentTemp">current temp<span className="deg">&deg;</span></p>
            <img className="weatherIcon" alt="weather condition icon" />
            <p className="weatherCondition">condition</p>
            <p className="high-low">high-low</p>
          </div>
          <div className="bottomCard">
            <p className="weatherSummary"></p>
          </div>
    </div>
  );
 }

export default MobileDay;
