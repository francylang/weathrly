import React from 'react';
import './Current.css'

export default class Current extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
  <div className = 'currentContainer'>
    <h2>Denver, CO</h2>
    <h2>Party Cloudy</h2>
    <h2>Wednesday</h2>
    <h2 className = "currentTemp">75</h2>
    <h2>85 55</h2>
  </div>
    )
  }
}
