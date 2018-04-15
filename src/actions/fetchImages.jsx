const requestingImages = () => {
  return {
    type: 'IMAGES_REQUEST'
  }
}

const requestSuccess = (requestedImages) => {
  return {
    type: 'IMAGES_SUCCESS',
    images: requestedImages
  }
}

export const requestDogImages = () => {
  return dispatch => {
    dispatch(requestingImages())
    return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(parsedRes => {
      dispatch(requestSuccess(parsedRes.message))
    })
  }
}