import React from 'react';
import DailyCard from '../DailyCard/DailyCard.js'
import './DailyCardContainer.css'



export default class DailyCardContainer extends React.Component {

  render() {
    console.log(this.props.day.tenDayForecast);
    const dayArray = [];
    if (this.props.day.tenDayForecast) {
      for (let i = 0; i < 10; i++) {
        dayArray.push([
          this.props.day.tenDayForecast[i],
        ])}
 }

   const mappedDayCardsArray = dayArray.map(element => {
     console.log(element);
     return (
       <DailyCard
       dayTime={element[0]}
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
