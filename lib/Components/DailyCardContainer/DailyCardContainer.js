import React from 'react';
import DailyCard from '../DailyCard/DailyCard.js'
import './DailyCardContainer.css'



export default class DailyCardContainer extends React.Component {

  dayArray() {
    const dayArray = [];
    if (this.props.day.tenDayDay) {
      for (let i = 0; i < 10; i++) {
        dayArray.push([
          this.props.day.tenDayDay[i],
          this.props.day.tenDayHigh[i],
          this.props.day.tenDayLow[i],
          this.props.day.tenDayIcon[i],
          this.props.day.tenDayCondition[i],
        ]);
      }
    }
    return dayArray;
  }

  displayTenDay() {
    this.dayArray().map((element, i) => {
      return (
        <DailyCard
        tenDayKey={'tenDay-' + i}
        dayTime={element[0]}
        dayTempHigh={element[1]}
        dayTempLow={element[2]}
        dayIcon={element[3]}
        dayCondition={element[4]}
      />
    );
    });
  }

  render() {
    return (
   <div>
     <h3>10 Day</h3>
     <hr className='hrOne'/>

     <hr className='hrTwo' />
   <div className= 'daily-CardContainer'>

    {this.displayTenDay()}
  </div>
  </div>
);
  }
}
