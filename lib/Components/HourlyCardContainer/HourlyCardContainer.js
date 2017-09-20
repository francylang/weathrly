import React from 'react';
import HourlyCard from '../HourlyCard/HourlyCard.js';
import '../HourlyCardContainer/HourlyCardContainer.css';



const HourlyCardContainer = props => {
  const hours = props.hour.sevenHourTime || [];

  const hourArray = hours.map((hour, i) => {
    return [props.hour.sevenHourTime[i],
    props.hour.sevenHourTemp[i],
    props.hour.sevenDayIcon[i],
    props.hour.sevenDayCondition[i]];
  });


  const mappedHourCardsArray = hourArray.map((element, i) => {
    return (
        <HourlyCard
          key={i}
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
