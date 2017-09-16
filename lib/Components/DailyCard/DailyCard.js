import React from 'react';
import './DailyCard.css'

const DailyCard = (props) => {



  return (
    <div className="dailyCardContainer">
    <div className="card">
      <p className="dayHigh" ></p>
      <p className="dayLow" ></p>
      <p className="day"></p>
    </div>
  </div>
    )
  }


export default DailyCard;
