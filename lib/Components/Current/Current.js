import React from 'react';
import './Current.css';


const Current = props => {
  return (
      // <div className={`mobileCard ${props.color}`}>
        <div className="mobileCard">
          <div className="topCard">
            <h1 className="city">{props.location}</h1>
            <h2 className="currentTemp">
              {props.currentTemp}
              <span className="deg">&deg;</span>
            </h2>
            <h2 className="high-low">
              HIGH {props.dayHigh}
              <span className="deg">&deg;</span>
              / LOW {props.dayLow}
              <span className="deg">&deg;</span>
            </h2>
          </div>
          <div className="middleCard">
            <i className={`wi wi-wu-${props.currentIcon} currentIcon`}></i>

            <h2 className="currentTime">{props.day}</h2>
          </div>
          <div className="bottomCard">
            <p className="weatherSummary">{props.dailyDescrip}</p>
          </div>
    </div>
  );
};


export default Current;
