import React from 'react';
import './HourlyCard.css';

const HourlyCard = (props) => {
  return (
    <div className="hourlyCardContainer">
      <div className="hourlyCard">

        <div className="timeCtnr">
         <h2 className="hourTime">{props.hourTime}</h2>
        </div>

      <div className="conditionCtnr">
        <h2 className="nameCondition">{props.condition}</h2>
      </div>

      <div className="iconsCtnr">
        <i className={`wi wi-wu-${props.dayIcon} hourlyweatherIcons`}></i>
      </div>

      <div className="tempCtnr">
        <h2 className="temp">{props.hourTemp}<span className="deg">&deg;</span></h2>
      </div>

      </div>
    </div>
  );
};



export default HourlyCard;
