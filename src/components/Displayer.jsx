import React, { Component } from 'react'
import { dogsArray, notDogsArray } from '../images/images-export'
import '../styles.css'

class Displayer extends Component {
  render() {
    const parsedDogImages = dogsArray.map((url, index) => {
      return <img src={url} alt={'dog'} key={index} className={'display-img'}/>
    })

    const parsedNotDogsImages = notDogsArray.map((url, index) => {
      return <img src={url} alt={'notDog'} key={index} className={'display-img'}/>
    })

    return(
      <React.Fragment>
        <h2>These are good dogs!</h2>
        {parsedDogImages}
        <h2>These are bad dogs!</h2>
        {parsedNotDogsImages}
      </React.Fragment>
    )
  }
}

export default Displayer