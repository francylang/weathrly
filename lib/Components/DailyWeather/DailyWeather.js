import React from 'react';
import DailyCard from '../DailyCard/DailyCard.js'
import './DailyWeather.css'


export default class DailyWeather extends React.Component {
  constructor() {
    super();
  }

render() {
  return (
    return (
      <div className="dailyContainer">
        <h2 className="dailyForecast">10-Day Forecast</h2>
        <div className="dailyCardContainer">
        </div>
      </div>
    );
  };
