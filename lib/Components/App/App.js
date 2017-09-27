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
        hours: [],
      },
      color: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.getData = this.getData.bind(this);
    this.displayWelcome = this.displayWelcome.bind(this);
    // this.getColors = this.getColors.bind(this);
  }

  componentDidMount() {
    const storeLocation = localStorage.getItem('location');

    if (storeLocation) {
      this.getData(storeLocation);
      // this.getColors(storeLocation);
    } else {
      this.getData('Louisville,KY');
      // this.getColors('none');
    }
  }

  cleanData(weather) {
    const { forecast: { simpleforecast: { forecastday } },
            current_observation,
            forecast: { txt_forecast } } = weather;
    this.setState({
      data: {
        location: current_observation.display_location.full,
        currentIcon: current_observation.icon,
        currentTemp: Math.ceil(weather.current_observation.temp_f),
        day: txt_forecast.forecastday[0].title,
        dailyDescrip: txt_forecast.forecastday[0].fcttext,
        timeAndDate: forecastday[0].date.pretty,
        dayHigh: forecastday[0].high.fahrenheit,
        dayLow: forecastday[0].low.fahrenheit,
        days: forecastday.map(day => {
          return {
            dayName: day.date.weekday_short,
            dayHigh: day.high.fahrenheit,
            dayLow: day.low.fahrenheit,
            dayIcon: day.icon,
            dayCondition: day.conditions,
          };
        }),
        hours: weather.hourly_forecast.map(hour => {
          return {
            hourTime: hour.FCTTIME.civil,
            hourTemp: hour.temp.english,
            hourIcon: hour.icon,
            hourCondition: hour.condition,
          };
        }),
      },
    });
  }

  getData(location) {
    fetch(`http://api.wunderground.com/api/${key}/forecast/geolookup/conditions/hourly/forecast10day/q/${location}.json`)
      .then(response => response.json())
      .then(weather => this.cleanData(weather))
      .catch(error => alert(error, 'Please enter a valid location'));
  }

  handleSearch(location, color) {
    localStorage.setItem('location', location);
    this.getData(location);
    // this.getColors(color);
  }

  // cleanAstronomyData(color) {
  //   this.setState({
  //     colorData: {
  //       sunSetTime: color.moon_phase,
  //     },

        // sunSetTime: parseInt(color.moon_phase.sunset.hour, 10),
        // sunRiseTime: parseInt(color.moon_phase.sunrise.hour, 10),
        // currentHour: parseInt(color.hourly_forecast[0].FCTTIME.hour, 10) - 1,
  //   });
  // }

  // getColors(location) {
  //   fetch(`http://api.wunderground.com/api/${key}/astronomy/q/${location}.json`)
  //     .then(response => response.json())
  //     .then(color => this.cleanAstronomyData(color))
  //     .catch(error => alert(error));
  // }

  displayWelcome() {
    return <div>
      <Welcome />
        <div className="searchApp">
      <Search
        handleSearch={this.handleSearch}/>
        </div>
    </div>;
  }

  renderApp() {
    return (

      <div className="weatherApp">
        <div className="cardContainer">
          <Search
            handleSearch={this.handleSearch}
          />
          <HourlyCardContainer
            hours={this.state.data.hours}
          />
          <DailyCardContainer
            days={this.state.data.days}
          />
        </div>

        <div className='mainCard'
            >
          <Current
            {...filterKeys(
              this.state.data,
              ['location', 'currentTemp', 'dayHigh',
               'dayLow', 'currentIcon', 'day', 'dailyDescrip']
             )}
            //  colors={this.state.colorData}

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
