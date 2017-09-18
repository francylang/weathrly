import React from 'react';
import HourlyCard from '../HourlyCard/HourlyCard.js'
import HourlyCardContainer from '../HourlyCardContainer/HourlyCardContainer.css'

export default class SevenHourContainer extends React.Component{

   render() {
     const hourArray = [];
     if (this.props.hour.sevenHourTime) {
       for (let i = 0; i < 7; i++) {
         hourArray.push([
           this.props.hour.sevenHourTime[i],
           this.props.hour.sevenHourTemp[i],
           this.props.hour.tenDayIcon[i],
           this.props.hour.sevenDayCondition[i],
         ])}
  }

    const mappedHourCardsArray = hourArray.map(element => {
      return (
        <HourlyCard
        hourTime={element[0]}
        hourTemp={element[1]}
        dayIcon={element[2]}
        condition={element[3]}
      />
    )
    })
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
      )
   }
}
