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
    this.handleSearch = this.handleSearch.bind(this)
    this.getData = this.getData.bind(this)
  }

  componentDidMount() {
    this.getData('Denver', 'CO');
  }

  getData(city, state) {
    fetch(`http://api.wunderground.com/api/a6154ae36fc409e3/forecast/geolookup/conditions/hourly/q/${state}/${city}.json`)
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

  handleSearch(location) {
    const cityState = location.split(', ')
    this.getData(cityState[0], cityState[1])
  }

  render() {
    return (
      <div className="weatherApp">
        <Search newLocation={this.state.suggestions} handleSearch={this.handleSearch}/>
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
