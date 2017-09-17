import React from 'react';
import './Current.css'

const Current = (props) => {

 return (
    <div className="mobileCard">
          <div className="topCard">
            <h1 className="city">{props.weather.location}</h1>
            <p className="currentTemp">{props.weather.currentTemp}<span className="deg">&deg;</span></p>
            <p className="high-low">High {props.weather.dayHigh}<span className="deg">&deg;</span> / Low {props.weather.dayLow}<span className="deg">&deg;</span></p>
          </div>
          <div className="middleCard">
            <img className="icon" alt="weather condition icon" src={props.weather.img} />
            <h2 className="currentTime">{props.weather.day}</h2>
          </div>
          <div className="bottomCard">
            <p className="weatherSummary">{props.weather.dailyDescrip}</p>
          </div>
    </div>
  );
 }

export default Current;
