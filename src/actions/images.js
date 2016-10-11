export const addImage = (src) => ({
  type: 'ADD_IMAGE',
  payload: src
});

export const removeImage = (id) => ({
  type: 'REMOVE_IMAGE',
  payload: id
});

export const setErroredFlag = (id) => ({
  type: 'SET_ERRORED_IMAGE_FLAG',
  payload: id
});

export const setLoadedFlag = (id) => ({
  type: 'SET_LOADED_IMAGE_FLAG',
  payload: id
});
