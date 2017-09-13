import React from 'react';
import './Search.css';
import cityList from '../../cityList';
import Trie from '../../Trie';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
      this.trie = {};

      this.state = {
        locInput: '',
        // suggestions: []
      };
  }

  componentDidMount() {
    const trie = new Trie();
    trie.populate(cities);
    this.trie = trie;
  }

  suggestState(e) {
    const locSuggestions = this.trie.suggest(e.target.value)
    this.setState({
      locInput: e.target.value, locSuggestions
    });
    console.log(locInput);
  }

  enterKey(e) {
    if (e.keyCode == 13) {
      this.suggestState()
      console.log(this.suggestState);
      }
    }

  render() {
    return (
  <div className= "searchContainer">
    <article className="input-button-container">
        <input className="search" id="search-text" type="text" name="search" placeholder="Search by city/state or zip code" />
        <button className="search-button" type="button" name="search button" placeholder="SEARCH">SEARCH</button>
      </article>
      <div className="suggestions">
        <ul className="suggestion-list">
          {this.state.locInput}
        </ul>
      </div>
  </div>
    )
  }
}
