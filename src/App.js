

import React, { Component } from 'react';
import './App.css';

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">My Travels</h1>
        <Travels
          destination="Hungary"
          country="Budapest"
          photo="http://www.ohb.hu/_photo/city/budapest1.jpg"
          distance="1200 km"
        />
        <Travels
          destination="Mexique"
          country="Mexico"
          photo="https://photo-thalasso-to.advences.com/Mexique-Autotour-7n-1.jpg"
          distance="1200 km"
        />
      </div>
    );
  }
}

export default App;