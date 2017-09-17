import React from 'react';
import './HourlyCard.css';

const HourlyCard = (props) => {
  return (
    <div className="hourlyCardContainer">
      <div className="hourlyCard">
        <h2 className="time">{props.hourTime}</h2>

      {/* <div className="icon-ctnr"> */}
        {/* <img className="icon" src='' alt='' /> */}
        <p className="classIcon"></p>
        <i className={`wi wi-wu-${props.dayIcon} weatherIcons`}></i>
        {/* <img className="hourlyIcon"  src={props.img} /> */}
        <p className="temp">{props.hourTemp}<span className="deg">&deg;</span></p>

      {/* </div> */}

      </div>
    </div>
  );
};

export default HourlyCard;
