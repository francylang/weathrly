import React from 'react';
import './HourlyCard.css';

const HourlyCard = (props) => {
  return (
    <div className="hourlyCardContainer">
      <div className="hourlyCard">
        <h2 className="time">{props.hourTime}</h2>
           <div className='conditionWords'>
        <h2 className="nameCondition">{props.condition}</h2>
      </div>
        <i className={`wi wi-wu-${props.dayIcon} hourlyweatherIcons`}></i>
        {/* <img className="hourlyIcon"  src={props.img} /> */}
        <h2 className="temp">{props.hourTemp}<span className="deg">&deg;</span></h2>

      {/* </div> */}

      </div>
    </div>
  );
};



export default HourlyCard;
