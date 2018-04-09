import React, { Component } from 'react'
import { dogsArray, notDogsArray } from '../images/images-export'
import ImgComponent from './ImgComponent'
import '../styles.css'

class Displayer extends Component {
  render(){
    return(
      <React.Fragment>
        <h2>These are good dogs!</h2>
        <ImgComponent images={dogsArray} type={'Dog'} />
        
        <h2>These are bad dogs!</h2>
        <ImgComponent images={notDogsArray} type={'NotDog'} />
      </React.Fragment>
    )
  }
}

export default Displayer