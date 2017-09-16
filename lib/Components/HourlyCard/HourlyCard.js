import React from 'react';


import './HourlyCard.css'

const HourlyCard = (props) => {

  const hourArray = []


if(props.time.sevenHourTime) {
  for (var i = 0; i < 7; i++) {
    hourArray.push([
      props.time.sevenHourTime[i],
      props.temp.sevenHourTemp[i]

    ])  }
}

let mappedArray = hourArray.map(element => {
  return (
    <div>
      <p>{element[0]}</p>
      <p>{element[1]}</p>
    </div>

  )
})


  return (
    <div className="hourlyCardContainer">
      <div className="hourlyCard">
        <p className="time">time</p>
        <p className="time">{props.time.sevenHourTime}</p>
        <p className="temp">temp</p>
        <p className="temp">{props.temp.sevenHourTemp}</p>
        <p className="condition" >condition</p>
      <div className="icon-ctnr">
        <img className="icon" src='' alt='' />
        <p className="classIcon">icon</p>
      </div>
        <p className="temp">temp</p>
      </div>
      {mappedArray}
    </div>




  );
};


export default HourlyCard;
