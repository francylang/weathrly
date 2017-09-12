import React from 'react';
import Welcome from '../Welcome/Welcome.js';
import Current from '../Current/Current.js';
import Search from '../Search/Search.js';

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
      <h1>App.js file is working</h1>
      // {/* <Current weather={this.state.data.currentWeather}/> */}
      <Current />
      <Search />
      <Welcome />
    </div>
  )
 }
}
