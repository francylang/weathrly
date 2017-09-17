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
  }

  handleChange(e) {
    const locSuggestions = this.trie.suggest(e.target.value)

    this.setState({
      locInput: e.target.value,
      suggestions: locSuggestions,
    });
  }

  selectCity(e) {
    const selectLocation = e.target.innerHTML;
    this.trie.select(selectLocation);
    this.setState({
      input: '',
      suggestions: [],
    });
  }

  handleClick() {
    console.log('locInput: ', this.state.locInput);
    this.props.handleSearch(this.state.locInput);
  }

  render() {
    const { input } = this.state;

    let { suggestions } = this.state;

    return (
  <div className= "searchContainer">
    <article className="input-button-container">

        <input
          onChange={this.handleChange}
          className="search" id="search-text"
          type="text"
          name="search"
          placeholder="Search by city/state or zip code" />
        <button onClick={this.handleClick}
                className="search-button"
                type="button" name="search button" placeholder="SEARCH">SEARCH</button>
    </article>
      <div className="suggestions">
        <ul className="suggestion-list">
          {this.state.suggestions}
        </ul>
      </div>
  </div>
    )
  }
}
