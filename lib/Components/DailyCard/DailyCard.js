import React from 'react';
import './DailyCard.css'

const DailyCard = (props) => {


  return (
    <div className="card">
      <img className="cardImg"/>
      <p className="dayHigh" ></p>
      <p className="dayLow" ></p>
      <p className="day"></p>
    </div>
    )
  }


export default DailyCard;
