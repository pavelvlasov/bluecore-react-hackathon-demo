jest.dontMock('../images');

const images = require('../images').default;

describe('images reducer', () => {
  it('should add image', () => {
    expect(images([], {
      type: 'ADD_IMAGE',
      payload: 'foo'
    })).toEqual([{
      id: 1,
      src: 'foo'
    }]);
  });

  it('should remove image', () => {
    expect(images([{
      id: 'foo'
    }], {
      type: 'REMOVE_IMAGE',
      payload: 'foo'
    })).toEqual([]);
  });

  it('should set loaded to true', () => {
    expect(images([{
      id: 'foo'
    }], {
      type: 'SET_LOADED_IMAGE_FLAG',
      payload: 'foo'
    })).toEqual([{
      id: 'foo',
      loaded: true
    }]);
  });

  it('should set errored to true', () => {
    expect(images([{
      id: 'foo'
    }], {
      type: 'SET_ERRORED_IMAGE_FLAG',
      payload: 'foo'
    })).toEqual([{
      id: 'foo',
      errored: true
    }]);
  });
});
