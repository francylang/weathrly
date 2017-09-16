import React from 'react';
import './DailyCard.css'

const DailyCard = (props) => {

  return (
    <div>
    <div className="card">
      <p className="dayHigh" ></p>
      <p className="dayLow" ></p>
      <p className="day">{props.dayTime}</p>
    </div>
  </div>
    )
  }


export default DailyCard;
