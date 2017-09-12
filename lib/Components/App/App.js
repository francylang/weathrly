import Welcome from '../Welcome/Welcome.js';
import React from 'react';
import Current from '../Current/Current.js';
import Search from '../Search/Search.js';

export default function App() {

  return (
  <div>
    <h1>App.js file is working</h1>
    <Current />
    <Search />
    <Welcome/>
  </div>
  )
}
