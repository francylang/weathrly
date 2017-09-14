import React from 'react';
import DailyCard from '../DailyCard/DailyCard.js';
import Welcome from '../Welcome/Welcome.js';
import Search from '../Search/Search.js';
import Current from '../Current/Current.js';
import MobileDay from '../MobileDay/MobileDay.js';
import './App.css'
import data from '../../practice-data/dummyData.js';

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('http://api.wunderground.com/api/a6154ae36fc409e3/forecast/geolookup/conditions/hourly/q/CO/Denver.json')
      .then(response => response.json())
      .then(dataResponse => this.setState(
        { data: {
        cityState: dataResponse.location.city + ', ' + dataResponse.location.state,
        dailyDescrip: dataResponse.forecast.txt_forecast.forecastday[0].fcttext,
        fullcast: dataResponse.current_observation.display_location.full,
        day: dataResponse.forecast.txt_forecast.forecastday[0].title,
        time: dataResponse.current_observation.local_time_rfc822,
        timeAndDate: dataResponse.forecast.simpleforecast.forecastday[0].date.pretty,
        currentWeather: dataResponse.forecast.simpleforecast.forecastday[0].conditions,
        currentTemp: dataResponse.current_observation.temp_f,
        dayHigh: dataResponse.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        dayLow: dataResponse.forecast.simpleforecast.forecastday[0].low.fahrenheit
       }
      })
     )
      .catch(error => console.log('error: ' + error));

      console.log(this.setState);
  }

  render() {
    return (
      <div className="weatherApp">
        <Current weather={this.state.dataResponse}/>
        <Search />
        <Welcome />
        <DailyCard />
        <MobileDay />
      </div>
  )
  console.log(weather);
 }
}
