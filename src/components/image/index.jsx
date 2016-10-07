import React, {PropTypes} from 'react';

const Image = (props) => {
  const {
    imageUrl,
    onError,
    onLoad
  } = props;

  return (
    <img
      src={imageUrl}
      onLoad={onLoad}
      onError={onError} />
  );
};
Image.propTypes = {
  imageUrl: PropTypes.string,
  onLoad: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired
};

export default Image;
