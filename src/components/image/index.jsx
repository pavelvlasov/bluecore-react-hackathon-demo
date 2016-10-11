import React, {PropTypes} from 'react';
import {Icon} from 'bluecore-ui-kit/lib/typography/Icon/Icon';

const Image = (props) => {
  const {
    id,
    src,
    onError,
    onLoad,
    onRemove
  } = props;

  return (
    <div style={{position: 'relative'}}>
      <Icon
        icon="close"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px'
        }}
        onClick={() => onRemove(id)} />
      <img
        style={{width: '100%'}}
        src={src}
        onLoad={onLoad}
        onError={onError} />
    </div>
  );
};
Image.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string,
  onLoad: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default Image;
