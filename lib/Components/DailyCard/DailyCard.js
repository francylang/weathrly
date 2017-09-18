import React from 'react';
import './DailyCard.css';

const DailyCard = (props) => {
  return (
    <div className="card">
      <h2 className="day">{props.dayTime}</h2>
      <i className={`wi wi-wu-${props.dayIcon} dailyWeatherIcons`}></i>
      <h2 className="dayCondition">{props.dayCondition}</h2>

      <h2 className="dayHigh" >{props.dayTempHigh}<span className="deg">&deg;</span>
        / {props.dayTempLow}
        <span className="deg">&deg;</span>
      </h2>
      {/* <p className="dayLow" ></p> */}



    </div>
  );
};


export default DailyCard;
