import React from 'react';
import HourlyCard from '../HourlyCard/HourlyCard.js';
import '../HourlyCardContainer/HourlyCardContainer.css';

const HourlyCardContainer = props => {
  const hours = props.sevenHourTime || [];

  const hourArray = hours.map((hour, index) => {
    return [props.sevenHourTime[index],
    props.sevenHourTemp[index],
    props.sevenHourIcon[index],
    props.sevenHourCondition[index]];
  });

  const mappedHourCardsArray = hourArray.map((element, index) => {
    return (
        <HourlyCard
          key={`hourly-card-${index}`}
        hourTime={element[0]}
        hourTemp={element[1]}
        dayIcon={element[2]}
        condition={element[3]}
      />
    );
  });
  return (
    <div className = 'hourlyCardContainer'>
      <div>
        <h3>Hourly</h3>
        <hr className='hrOne'/>
        <hr className='hrTwo' />
      <div className='justhoursContainer'>
      {mappedHourCardsArray}
     </div>
    </div>
   </div>
 );
};


export default HourlyCardContainer;
