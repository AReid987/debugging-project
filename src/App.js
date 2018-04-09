import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Displayer from './components/Displayer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Displayer />
      </div>
    );
  }
}

export default App;
