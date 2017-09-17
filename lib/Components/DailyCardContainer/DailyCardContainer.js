import React from 'react';
import DailyCard from '../DailyCard/DailyCard.js'
import './DailyCardContainer.css'



export default class DailyCardContainer extends React.Component {

  render() {
    console.log(this.props.day.tenDayDay);
    const dayArray = [];
    if (this.props.day.tenDayDay) {
      for (let i = 0; i < 10; i++) {
        dayArray.push([
          this.props.day.tenDayDay[i],
          this.props.day.tenDayHigh[i],
          this.props.day.tenDayLow[i],
          this.props.day.tenDayIcon[i]
        ])}
 }

   const mappedDayCardsArray = dayArray.map(element => {
     console.log(element);
     return (
       <DailyCard
       dayTime={element[0]}
       dayTempHigh={element[1]}
       dayTempLow={element[2]}
       dayIcon={element[3]}

     />
   )
   })
 return (
   <div className= 'dailyCardContainer'>
     <div>
    {mappedDayCardsArray}
  </div>
  </div>
     )
  }
}
