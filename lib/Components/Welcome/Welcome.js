import React from 'react';
import './Welcome.css'

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="welcomeContainer">
        <h3 className="welcomeText">
Weather</h3>
      </div>
    );
  }
}
