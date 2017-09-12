import React from 'react';
import './Current.css'

export default class Current extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
  <div className = 'currentContainer'>
    <h1>Current.js file is working</h1>
    <h2>Name of the current city</h2>
    <h2>Current Condition</h2>
    <h2>Current Day</h2>
    <h2>Temperature</h2>
    <h2>Expected High and Low</h2>
    <h2>Weather Summary</h2>
  </div>
    )
  }
}
