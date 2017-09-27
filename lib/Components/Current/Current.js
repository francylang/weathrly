import React from 'react';
import './Current.css';


const Current = props => {
  const colorConditions = {
    night: { style: { background: 'linear-gradient(#B130DE, #463E9C)' } },
    morning: { style: { background: 'linear-gradient(#E86868, #F3D766)' } },
    day: { style: { background: 'linear-gradient(#4A90E2, #76b5ef)' } },
  };

  const changeColor = () => {
    let backgroundColor = colorConditions.morning.style;

    if (props.currentHour >= props.sunRiseTime ||
      props.currentHour <= props.sunRiseTime)
      { backgroundColor = colorConditions.night.style;
    }
  };


  return (
      // <div className={`mobileCard ${props.colors}`}>
      <div className="mobileCard">
          <div className="topCard">
            <h1 className="city">{props.location}</h1>
            <h2 className="currentTemp">
              {props.currentTemp}
              <span className="deg">&deg;</span>
            </h2>
            <h2 className="high-low">
              HIGH {props.dayHigh}
              <span className="deg">&deg;</span>
              / LOW {props.dayLow}
              <span className="deg">&deg;</span>
            </h2>
          </div>
          <div className="middleCard">
            <i className={`wi wi-wu-${props.currentIcon} currentIcon`}></i>

            <h2 className="currentTime">{props.day}</h2>
          </div>
          <div className="bottomCard">
            <p className="weatherSummary">{props.dailyDescrip}</p>
          </div>
    </div>
  );
};


export default Current;
