import React from 'react';
import DailyCard from '../DailyCard/DailyCard.js';
import Welcome from '../Welcome/Welcome.js';
import Search from '../Search/Search.js';
import Current from '../Current/Current.js';
import HourlyCardContainer from '../HourlyCardContainer/HourlyCardContainer.js';
import DailyCardContainer from '../DailyCardContainer/DailyCardContainer.js';
import key from '../../key';
import { filterKeys } from '../../helper-files/utils.js';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        days: [],
      },
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.getData = this.getData.bind(this);
    this.displayWelcome = this.displayWelcome.bind(this);
  }

  componentDidMount() {
    const storeLocation = localStorage.getItem('location');

    if (storeLocation) {
      this.getData(storeLocation);
    } else {
      this.getData('Louisville,KY');
    }
  }

  cleanData(weather) {
    this.setState({
      data: {
        location: weather.current_observation.display_location.full,
        currentIcon: weather.current_observation.icon,
        currentTemp: Math.ceil(weather.current_observation.temp_f),
        day: weather.forecast.txt_forecast.forecastday[0].title,
        dailyDescrip: weather.forecast.txt_forecast.forecastday[0].fcttext,
        timeAndDate: weather.forecast.simpleforecast.forecastday[0].date.pretty,
        dayHigh: weather.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        dayLow: weather.forecast.simpleforecast.forecastday[0].low.fahrenheit,
        days: weather.forecast.simpleforecast.forecastday.map(day => {
          return {
            dayName: day.date.weekday_short,
            dayHigh: day.high.fahrenheit,
            dayLow: day.low.fahrenheit,
            dayIcon: day.icon,
            dayCondition: day.conditions,
          };
        }),
        sevenHourTime: weather.hourly_forecast.map(hour => hour.FCTTIME.civil).slice(0, 7),
        sevenHourTemp: weather.hourly_forecast.map(hour => hour.temp.english).slice(0, 7),
        sevenHourCondition: weather.hourly_forecast.map(day => day.condition).slice(0, 7),
        sevenHourIcon: weather.hourly_forecast.map(day => day.icon).slice(0, 7),
        // sunSetTime: parseInt(weather.moon_phase.sunset.hour, 10),
        // sunRiseTime: parseInt(weather.moon_phase.sunrise.hour, 10),
        // currentHour: parseInt(weather.hourly_forecast[0].FCTTIME.hour, 10) - 1,
      },
    });
  }

  getData(location) {
    fetch(`http://api.wunderground.com/api/${key}/forecast/geolookup/conditions/hourly/forecast10day/q/${location}.json
      `)
      .then(response => response.json())
      .then(weather => this.cleanData(weather))
      .catch(error => alert(error, 'Please enter a valid location'));
  }

  handleSearch(location, color) {
    localStorage.setItem('location', location);
    this.getData(location);
  }

  displayWelcome() {
      return <div>
        <Welcome />
        <div className="searchApp">
        <Search
          handleSearch={this.handleSearch}
      />
        </div>
    </div>;
    }
//       const colorConditions = {
//         night: {
//           style: {
//             background: 'linear-gradient(#B130DE, #463E9C)',
//           },
//         },
//         morning: {
//           style: {
//             background: 'linear-gradient(#E86868, #F3D766)',
//           },
//         },
//         day: {
//           style: {
//             background: 'linear-gradient(#4A90E2, #76b5ef)',
//           },
//         },
//       };
//
// let backgroundColor = colorConditions.morning.style;
//
//     if (this.state.data.currentHour >= this.state.data.sunRiseTime ||
//       this.state.data.currentHour <= this.state.data.sunRiseTime) {
//       backgroundColor = colorConditions.night.style;
//   }
  renderApp() {
    return (
      <div className="weatherApp">
        <div className="cardContainer">
          <Search
            handleSearch={this.handleSearch}
          />
          <HourlyCardContainer
            {...filterKeys(this.state.data, ['sevenHourTime', 'sevenHourTemp', 'sevenHourIcon', 'sevenHourCondition'])}
          />
          <DailyCardContainer
            days={this.state.data.days}
          />
        </div>

        <div className='mainCard'
            // style={backgroundColor}
            >
          <Current
            {...filterKeys(this.state.data, ['location', 'currentTemp', 'dayHigh', 'dayLow', 'currentIcon', 'day', 'dailyDescrip'])}
          />
        </div>
      </div>
    );
  }



  render() {
    const locationKnown = localStorage.getItem('location');
    return (
      <div>
        {!locationKnown && this.displayWelcome()}
        {locationKnown && this.renderApp()}
      </div>
    );
  }
}
