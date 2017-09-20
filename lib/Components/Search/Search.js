import React from 'react';
import './Search.css';
import cities from '../../helper-files/cityList';
import Trie from '../../helper-files/Trie';


export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.trie = {};

    this.state = {
      locInput: '',
      suggestions: [],
    };
    this.trie = new Trie();
    this.trie.populate(cities);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.selectCity = this.selectCity.bind(this);
    this.enterKeyHandler = this.enterKeyHandler.bind(this);
  }

  handleChange(e) {
    const locSuggestions = this.trie.suggest(e.target.value);

    this.setState({
      locInput: e.target.value,
      suggestions: locSuggestions,
    });
  }

  selectCity(e) {
    const selectLocation = e.target.innerHTML;
    this.trie.select(selectLocation);
    this.props.handleSearch(selectLocation);
  }

  enterKeyHandler(e) {
    if (e.key === 'Enter') {
      this.props.handleSearch(this.state.locInput);
    }
  }

  handleClick() {
    this.props.handleSearch(this.state.locInput);
    // this.setState({
    //   locInput: '',
    //   suggestions: [],
    // });
  }

  listSuggestions() {
    if (this.state.suggestions.length) {
      return this.state.suggestions.map((city, index) =>
      <li
        className="searchDropDown"
        key={'suggest-' + index}
        onClick={this.selectCity}>{city}
      </li>);
    } else {
      return <div></div>;
    }
  }

  render() {
    const { input } = this.state;

    const { suggestions } = this.state;

    if (input === '') {
      this.setState({
        suggestions: [],
      });
    }

    return (
  <div className= "searchContainer">
    <article className="input-button-container">

        <input
          onKeyUp={this.handleChange}
          onKeyPress={this.enterKeyHandler}
          className="search" id="search-text"
          type="text"
          name="search"
          placeholder="Search by city/state or zip code" />
        <button
          onClick={this.handleClick}
          className="search-button"
          type="button"
          name="search button"
          placeholder="SEARCH">SEARCH</button>
    </article>
      <div className="suggestions">
        <div className="suggested-city">
        <ul className="suggestion-list">
          { this.listSuggestions() }
        </ul>
      </div>
      </div>
  </div>
);
  }
}
