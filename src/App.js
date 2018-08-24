import React, { Component } from 'react';
import basketball from './basketball.png'
import './App.css';
import PlayerSearch from './components/Container/PlayerSearch'
import { Provider } from 'react-redux';
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={basketball} className="App-logo" alt="basketball" />
          <h1 className="App-title">Welcome to NBA Stats Search</h1>
        </header>
        <PlayerSearch />
      </div>
      </Provider>
    );
  }
}

export default App;
