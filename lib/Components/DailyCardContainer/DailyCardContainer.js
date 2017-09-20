import React from 'react';
import DailyCard from '../DailyCard/DailyCard.js'
import './DailyCardContainer.css'



const DailyCardContainer = (props) => {

    const dayArray = [];
    if (props.day.tenDayDay) {
      for (let i = 0; i < 10; i++) {
        dayArray.push([
          props.day.tenDayDay[i],
          props.day.tenDayHigh[i],
          props.day.tenDayLow[i],
          props.day.tenDayIcon[i],
          props.day.tenDayCondition[i],

        ]);
      }
    }

   const mappedDayCardsArray = dayArray.map((element, i) => {
     return (
       <DailyCard
      key={i}
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
  }

export default DailyCardContainer;
