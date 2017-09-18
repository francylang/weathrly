import React from 'react';
import DailyCard from '../DailyCard/DailyCard.js';
import Welcome from '../Welcome/Welcome.js';
import Search from '../Search/Search.js';
import Current from '../Current/Current.js';
import HourlyCardContainer from '../HourlyCardContainer/HourlyCardContainer.js';
import DailyCardContainer from '../DailyCardContainer/DailyCardContainer.js';
import key from '../../key';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    const storeLocation = localStorage.getItem('location');

    if (storeLocation) {
      this.getData(storeLocation);
    } else {
      this.getData('Louisville,KY');
    }
  }

  getData(location) {
    fetch(`    http://api.wunderground.com/api/${key}/forecast/geolookup/conditions/hourly/forecast10day/q/${location}..json
`)
      .then(response => response.json())
      .then(weather => this.setState(
        { data: {
          location: weather.current_observation.display_location.full,
          day: weather.forecast.txt_forecast.forecastday[0].title,
          timeAndDate: weather.forecast.simpleforecast.forecastday[0].date.pretty,
          currentTemp: Math.ceil(weather.current_observation.temp_f),
          currentIcon: weather.current_observation.icon,
          dayHigh: weather.forecast.simpleforecast.forecastday[0].high.fahrenheit,
          dayLow: weather.forecast.simpleforecast.forecastday[0].low.fahrenheit,
          dailyDescrip: weather.forecast.txt_forecast.forecastday[0].fcttext,
          sevenHourTime: weather.hourly_forecast.map(hour => hour.FCTTIME.civil).slice(0, 7),
          sevenHourTemp: weather.hourly_forecast.map(hour => hour.temp.english).slice(0, 7),
          sevenDayCondition: weather.hourly_forecast.map(day => day.condition).slice(0, 7),

          tenDayDay: weather.forecast.simpleforecast.forecastday.map(day => day.date.weekday_short),
          tenDayHigh: weather.forecast.simpleforecast.forecastday.map(day => day.high.fahrenheit),
          tenDayLow: weather.forecast.simpleforecast.forecastday.map(day => day.low.fahrenheit),
          tenDayIcon: weather.forecast.simpleforecast.forecastday.map(day => day.icon),
          tenDayCondition: weather.hourly_forecast.map(day => day.condition).slice(0, 10),

          // sunSetTime: parseInt(weather.moon_phase.sunset.hour, 10),
          // sunRiseTime: parseInt(weather.moon_phase.sunrise.hour, 10),
        },
      })
     )
      .catch(error => alert('WRONG'));
  }

  handleSearch(location) {
    localStorage.setItem('location', location);
    this.getData(location);
  }

  render() {
    return (
      <div className="weatherApp">
        <div className="cardContainer">
        <Search
          newLocation={this.state.suggestions}
          handleSearch={this.handleSearch}
        />

        <HourlyCardContainer
        time={this.state.data}
        temp={this.state.data}
        dayIcon={this.state.data}
        condition={this.state.data}
        />

       <DailyCardContainer
         day={this.state.data}
         tempHigh={this.state.data}
         tempLow={this.state.data}
         dayIcon={this.state.data}
         condition={this.state.data}
       />
       </div>
      <div className='mainCard'>
      <Current
        weather={this.state.data}
        />
      </div>
      </div>
  );
  }
}
