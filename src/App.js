import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Displayer from './components/Displayer'

class App extends Component {
  render() {
    console.warn = '' //Do not Edit! Hides the error messages just for this example!
    
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
