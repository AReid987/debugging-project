import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestDogImages }  from './actions/fetchImages'
import { Switch, Route } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

import Displayer from './components/Displayer'

class App extends Component {
  componentDidMount() {
    [...Array(3)].forEach(()=> {
      this.props.requestDogImages()
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route exact path='/' render={(props) => (
            <Displayer images={this.props.dogImages} />
          )}/>
        </Switch>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dogImages: state.dogsImageArray
  }
}

export default connect( mapStateToProps, { requestDogImages })(App)
