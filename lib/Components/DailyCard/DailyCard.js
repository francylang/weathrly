import React from 'react';
import './DailyCard.css';

const DailyCard = (props) => {
  return (
    <div className="card">
      <p className="day">{props.dayTime}</p>
      <p className="icons">{props.dayIcon}</p>

      <p className="dayHigh" >{props.dayTempHigh}
        <span className="deg">&deg;</span>
        / {props.dayTempLow}
        <span className="deg">&deg;</span>
      </p>
      {/* <p className="dayLow" ></p> */}
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
    </div>
  );
};


export default DailyCard;
