import React from 'react';
import DailyCard from '../DailyCard/DailyCard.js';
import './DailyCardContainer.css';

const DailyCardContainer = props => {
  const mappedDayCardsArray = props.days.map((element, index) => {
    return <DailyCard key={index} {...element}/>;
  });
  return (
   <div>
     <h3>10 Day</h3>
     <hr className='hrOne'/>
     <hr className='hrTwo' />
   <div className= 'daily-CardContainer'>
    {mappedDayCardsArray}
  </div>
  </div>
);
};

export default DailyCardContainer;
