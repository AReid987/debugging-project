import React from 'react'

const ImgComponent = ({ images, type }) => {
  const parsedImages = images.map((url, index) => { 
    <img src={url} alt={type} key={index} className={'display-img'}/>
  })
  
  console.warn = '' //Do not Edit! Hides the error messages just for this example!
  return (
    <React.Fragment>
      { parsedImages }
    </React.Fragment>
  )
}

export default ImgComponent