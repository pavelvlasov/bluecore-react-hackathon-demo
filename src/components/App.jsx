import React, {Component} from 'react';

import SearchBar from './search_bar';
import ImageList from './image_list';

import {Container} from 'bluecore-ui-kit/lib/layout/Container/Container';
import {Row} from 'bluecore-ui-kit/lib/layout/Row/Row';

let imageId = 0;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      images: []
    };
  }

  onAddImage = (src) => {
    imageId += 1;
    this.setState({
      images: [
        ...this.state.images,
        {
          id: imageId,
          src
        }
      ]
    });
  }

  onRemove = (id) => {
    this.setState({
      images: this.state.images.filter(image =>
        image.id !== id
      )
    });
  }

  onLoad = (id) => {
    this.setState({
      images: this.state.images.map(image => {
        if (image.id === id) {
          return {
            ...image,
            loaded: true
          };
        }
        return image;
      })
    });
  }

  onError = (id) => {
    this.setState({
      images: this.state.images.map(image => {
        if (image.id === id) {
          return {
            ...image,
            loaded: true
          };
        }
        return image;
      })
    });
  }

  onChange = (searchTerm) => {
    this.setState({searchTerm});
  }

  onSubmit = () => {
    this.onAddImage(this.state.searchTerm);
    this.setState({searchTerm: ''});
  }

  render() {
    const {
      searchTerm,
      images
    } = this.state;

    return (
      <Container>
        <Row>
          <SearchBar
            searchTerm={searchTerm}
            onChange={this.onChange}
            onSubmit={this.onSubmit} />
        </Row>
        <Row>
          <ImageList
            images={images}
            onError={this.onError}
            onLoad={this.onLoad}
            onRemove={this.onRemove}
          />
        </Row>
      </Container>
    );
  }
}

export default App;
