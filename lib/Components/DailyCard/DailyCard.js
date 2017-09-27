import React from 'react';
import './DailyCard.css';

const DailyCard = props => {
  return (
    <div className="card" key={props.tenDayKey}>
      <h2 className="day">{props.dayName}</h2>
      <i className={`wi wi-wu-${props.dayIcon} dailyWeatherIcons`}></i>
      <h2 className="dayCondition">{props.dayCondition}</h2>

      <h2 className="dayHigh" >{props.dayHigh}<span className="deg">&deg;</span>
        / {props.dayLow}
        <span className="deg">&deg;</span>
      </h2>
    </div>
  );
};


export default DailyCard;
