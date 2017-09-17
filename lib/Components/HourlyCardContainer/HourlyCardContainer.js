import React from 'react';
import HourlyCard from '../HourlyCard/HourlyCard.js'
import HourlyCardContainer from '../HourlyCardContainer/HourlyCardContainer.css'

export default class SevenHourContainer extends React.Component{

   render() {
     const hourArray = [];
     if (this.props.time.sevenHourTime) {
       for (let i = 0; i < 7; i++) {
         hourArray.push([
           this.props.time.sevenHourTime[i],
           this.props.temp.sevenHourTemp[i]

         ])}
  }

    const mappedHourCardsArray = hourArray.map(element => {
      return (
        <HourlyCard
        hourTime={element[0]}
        hourTemp={element[1]}
      />
    )
    })
  return (
    <div className = 'hourlyCardContainer'>
      <div>
     {mappedHourCardsArray}
   </div>
   </div>
      )
   }
}
