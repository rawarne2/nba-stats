import React, { Component } from 'react';
import logo from './logo.svg';
import basketball from './basketball.png'
import './App.css';
import PlayerSearch from './components/PlayerSearch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={basketball} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to NBA Stats Search</h1>
        </header>
        <PlayerSearch />
      </div>
    );
  }
}

export default App;
