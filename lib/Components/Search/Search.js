import React from 'react';
import './Search.css'

export default class Search extends React.Component {
  constructor(props) {
  super(props);
  }
  render() {
    return (
  <div className= "searchContainer">
    <article className="input-button-container">
        <input className="search" id="search-text" type="text" name="search" placeholder="Search by city/state or zip code" />
        <button className="search-button" type="button" name="search button" placeholder="SEARCH">SEARCH</button>
      </article>
      <div className="suggestions">
        <ul className="suggestion-list"> </ul>
      </div>
  </div>
    )
  }
}
