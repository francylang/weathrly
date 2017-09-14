import React from 'react';
import DailyCard from '../DailyCard/DailyCard.js';
import Welcome from '../Welcome/Welcome.js';
import Search from '../Search/Search.js';
import Current from '../Current/Current.js';
import './App.css'
import data from '../../practice-data/dummyData.js';
import DailyWeather from '../DailyWeather/DailyWeather.js'
import HourlyCard from '../HourlyCard/HourlyCard.js'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {}
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
        location: dataResponse.current_observation.display_location.full,
        day: dataResponse.forecast.txt_forecast.forecastday[0].title,
        timeAndDate: dataResponse.forecast.simpleforecast.forecastday[0].date.pretty,
        currentTemp: dataResponse.current_observation.temp_f,
        dayHigh: dataResponse.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        dayLow: dataResponse.forecast.simpleforecast.forecastday[0].low.fahrenheit,
        dailyDescrip: dataResponse.forecast.txt_forecast.forecastday[0].fcttext
       }
      })
     )
      .catch(error => console.log('error: ' + error));

      console.log(this.setState);
  }

  render() {
    return (
      <div className="weatherApp">
        <Search newLocation={this.state.suggestions}/>
        <DailyCard />
        <DailyWeather />
        {/* <Welcome /> */}
        <HourlyCard />
        <Current weather={this.state.data}/>
      </div>
  )
  console.log(weather);
 }
}
