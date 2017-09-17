import React from 'react';
import './HourlyCard.css'

const HourlyCard = (props) => {

  return (
    <div className="hourlyCardContainer">
      <div className="hourlyCard">
        <h2 className="time">{props.hourTime}</h2>
        <p className="temp">{props.hourTemp}</p>
      <div className="icon-ctnr">
        <img className="icon" src='' alt='' />
        <p className="classIcon"></p>
        <p className="condition">{props.dayIcon}</p>

      </div>
        <p className="temp"></p>
      </div>
    </div>
  );
};

export default HourlyCard;
