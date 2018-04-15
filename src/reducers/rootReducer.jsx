const initState = {
  dogsImageArray: [],
  requesting: false
}

export default (state = initState, action) => {
  switch(action.type) {

    case 'IMAGES_REQUEST':
      return {
        ...state,
        requesting: true
      }

    case 'IMAGES_SUCCESS':
      return {
        dogsImageArray: [...state.dogsImageArray, action.images],
        requesting: false,
      }
      
    default:
      return state;
  }
}