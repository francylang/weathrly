import React from 'react';
import './HourlyCard.css'

const HourlyCard = (props) => {

  return (
    <div className="hourlyCardContainer">
      <div className="hourlyCard">
        <p className="time"></p>
        <p className="time">{props.hourTime}</p>
        <p className="temp"></p>
        <p className="temp">{props.hourTemp}</p>
        <p className="condition" ></p>
      <div className="icon-ctnr">
        <img className="icon" src='' alt='' />
        <p className="classIcon"></p>
      </div>
        <p className="temp"></p>
      </div>
    </div>
  );
};


export default HourlyCard;
