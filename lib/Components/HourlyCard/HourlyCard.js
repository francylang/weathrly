import React from 'react';


import './HourlyCard.css'

const HourlyCard = (props) => {


  return (
    <div className="hourlyCardContainer">
    <div className="card">
      <p className="dayHigh" ></p>
      <p className="dayLow" ></p>
      <p className="day"></p>
    </div>
  </div>
    )
  }


export default HourlyCard;
