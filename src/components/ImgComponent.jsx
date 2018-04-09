import React from 'react'

const ImgComponent = ({ images, type }) => {
  debugger
  return (
    { images.map((image, index) => { 
      `<img src={require(${image})} alt={${type}index} key={${index}} className={'display-img'}/>`
    }) }
  )
}

export default ImgComponent