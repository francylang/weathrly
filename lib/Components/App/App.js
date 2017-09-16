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
    const storeLocation = localStorage.getItem('location')

    if (storeLocation) {
    this.getData(storeLocation);
  } else {
    this.getData('Louisville,KY')
  }
  }

  getData(location) {

    fetch(`http://api.wunderground.com/api/a6154ae36fc409e3/forecast/geolookup/conditions/hourly/q/${location}.json`)
      .then(response => response.json())
      .then(weather => this.setState(
        { data: {
        location: weather.current_observation.display_location.full,
        day: weather.forecast.txt_forecast.forecastday[0].title,
        timeAndDate: weather.forecast.simpleforecast.forecastday[0].date.pretty,
        currentTemp: weather.current_observation.temp_f,
        dayHigh: weather.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        dayLow: weather.forecast.simpleforecast.forecastday[0].low.fahrenheit,
        dailyDescrip: weather.forecast.txt_forecast.forecastday[0].fcttext,
        img: weather.current_observation.icon_url,
        sevenHourTime: weather.hourly_forecast.map( hour => hour.FCTTIME.civil).slice(0, 7),
        sevenHourTemp: weather.hourly_forecast.map( hour => hour.temp.english).slice(0, 7)
       }
      })
     )
      .catch(error => console.log('error: ' + error));

      console.log(this.setState);
  }

  handleSearch(location) {
    localStorage.setItem('location', location)
    this.getData(location)

  }

  render() {
    return (
      <div className="weatherApp">
        <Search newLocation={this.state.suggestions} handleSearch={this.handleSearch}
        />

        <HourlyCard
        time={this.state.data}
        temp={this.state.data}
         />

        <DailyCard
        />

        <DailyWeather />
        {/* <Welcome /> */}

        <Current weather={this.state.data}/>
      </div>
  )
  console.log(weather);
 }
}
