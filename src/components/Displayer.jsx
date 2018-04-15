import React, { Component } from 'react'
import { dogsArray, notDogsArray } from '../images/images-export'
import ImgComponent from './ImgComponent'
import '../styles.css'

class Displayer extends Component {
  render(){
    return(
      <React.Fragment>
        <h2><span /> These are good dogs! <span /></h2>
        <ImgComponent images={this.props.images} type={'Dog'} />
        
        <h2><span /> These are bad dogs! <span /> </h2>
        <ImgComponent images={notDogsArray} type={'NotDog'} />
      </React.Fragment>
    )
  }
}

export default Displayer