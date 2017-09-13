import React from 'react';
import './DailyCard.css'

export default class DailyCard extends React.Component {
  constructor() {
    super();
  }

render() {
  return (
    <div className="card">
      <img className="cardImg"/>
      <p className="dayHigh" ></p>
      <p className="dayLow" ></p>
      <p className="day"></p>
    </div>
    )
  }
}
