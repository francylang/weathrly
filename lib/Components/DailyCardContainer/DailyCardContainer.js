import React from 'react';
import DailyCard from '../DailyCard/DailyCard.js';
import './DailyCardContainer.css';



const DailyCardContainer = props => {
  const days = props.day.tenDayDay || [];

  const dayArray = days.map((day, index) => {
    return [props.day.tenDayDay[index],
      props.day.tenDayHigh[index],
      props.day.tenDayLow[index],
      props.day.tenDayIcon[index],
      props.day.tenDayCondition[index]];
  });

  const mappedDayCardsArray = dayArray.map((element, index) => {
    return (
       <DailyCard
       key={index}
       dayTime={element[0]}
       dayTempHigh={element[1]}
       dayTempLow={element[2]}
       dayIcon={element[3]}
       dayCondition={element[4]}
     />
   );
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
