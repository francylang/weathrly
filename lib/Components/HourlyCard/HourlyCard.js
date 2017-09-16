import React from 'react';


import './HourlyCard.css'

const HourlyCard = (props) => {



  return (
    <div className="hourlyCardContainer">
      <div className="hourlyCard">
        <p className="time">time</p>
        <p className="time">{props.hourTime}</p>
        <p className="temp">temp</p>
        <p className="temp">{props.hourTemp}</p>
        <p className="condition" >condition</p>
      <div className="icon-ctnr">
        <img className="icon" src='' alt='' />
        <p className="classIcon">icon</p>
      </div>
        <p className="temp">temp</p>
      </div>
    </div>
  );
};


export default HourlyCard;
