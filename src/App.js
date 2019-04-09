import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import travel.js from "./travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <travel
          destination="Hungary"
          contry="Budapest"
          photo="http://www.ohb.hu/_photo/city/budapest1.jpg"
          distance="1200km"
        />
        <travel
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="http://www.ohb.hu/_photo/city/budapest1.jpg"
          distance="1200km"
        />
      </div>
    );
  }
}

export default App;