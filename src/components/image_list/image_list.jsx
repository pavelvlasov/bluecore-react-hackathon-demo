import React, {PropTypes} from 'react';
import Image from '../image';
import chunk from 'lodash.chunk';

import {Container} from 'bluecore-ui-kit/lib/layout/Container/Container';
import {Row} from 'bluecore-ui-kit/lib/layout/Row/Row';
import {Column} from 'bluecore-ui-kit/lib/layout/Column/Column';

const ImageList = (props) => {
  const {
    images
  } = props;

  const chunks = chunk(images, 4);

  return (
    <Container>
      {chunks.map((images, index) => (
        <Row key={index} columnsCount={4}>
          {images.map(image => (
            <Column key={image.id} width={3}>
              <Image
                {...props}
                {...image}
              />
            </Column>
          ))}
        </Row>
      ))}
    </Container>
  );
};
ImageList.propTypes = {
  images: PropTypes.array.isRequired,
  onLoad: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default ImageList;
