import React, {PropTypes} from 'react';

const Image = ({
  imageUrl,
  onLoad,
  onError
}) => {
  return (
    <img
      alt="Image not available"
      src={imageUrl}
      onLoad={onLoad}
      onError={onError} />
  );
};
Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onLoad: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired
};

export default Image;
