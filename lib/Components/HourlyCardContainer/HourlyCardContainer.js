import React from 'react';
import HourlyCard from '../HourlyCard/HourlyCard.js';
import '../HourlyCardContainer/HourlyCardContainer.css';

const HourlyCardContainer = props => {
  const mappedHourCardsArray = props.hours.slice(0, 7).map((element, index) => {
    return <HourlyCard key={index} {...element}/>;
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
