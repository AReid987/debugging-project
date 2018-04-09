import React, { Component } from 'react'
import { dogsArray, notDogsArray } from '../images/images-export'
import '../styles.css'

class Displayer extends Component {
  render() {
    
    console.log(dogsArray[2])
    return(
      <React.Fragment>
        <h2>These are good dogs!</h2>
        {dogsArray}
        <h2>These are bad dogs!</h2>
        {notDogsArray}
      </React.Fragment>
    )
  }
}

export default Displayer