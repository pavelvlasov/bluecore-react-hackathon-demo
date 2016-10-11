const defaultState = [];

let imageId = 0;

const images = (state = defaultState, action) => {
  switch(action.type) {
  case 'ADD_IMAGE':
    imageId += 1;
    return [
      ...state,
      {
        id: imageId,
        src: action.payload
      }
    ];

  case 'REMOVE_IMAGE':
    return state.filter((image) => image.id !== action.payload);

  case 'SET_LOADED_IMAGE_FLAG':
    return state.map((image) => {
      if (image.id === action.payload) {
        return {
          ...image,
          loaded: true
        };
      }
      return image;
    });

  case 'SET_ERRORED_IMAGE_FLAG':
    return state.map((image) => {
      if (image.id === action.payload) {
        return {
          ...image,
          errored: true
        };
      }
      return image;
    });

  default:
    return state;
  }
};

export default images;
