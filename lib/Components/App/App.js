import React from 'react';
import DailyCard from '../DailyCard/DailyCard.js';
import Welcome from '../Welcome/Welcome.js';
import Search from '../Search/Search.js';
import Current from '../Current/Current.js';
import './App.css'
import data from '../../practice-data/dummyData.js';

export default class App extends React.Component {
  constructor() {
    super()
  }
//     this.state = {
//       data: null
//     }
//   }
//
//   componentDidMount() {
//
//   }
//
render() {
  return (
    <div>
       {/* <Current weather={this.state.data.currentWeather}/> */}
      <Search />
      <Current />
      <Welcome />
      <DailyCard />
    </div>
  )
 }
}
