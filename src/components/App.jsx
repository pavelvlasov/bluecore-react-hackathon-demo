import React, {Component} from 'react';

import SearchBar from './search_bar';
import Image from './image';

import {Container} from 'bluecore-ui-kit/lib/layout/Container/Container';
import {Row} from 'bluecore-ui-kit/lib/layout/Row/Row';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      imageUrl: null,
      status: 'Waiting for input'
    };
  }

  onChange = (searchTerm) => {
    this.setState({searchTerm});
  }

  onSubmit = () => {
    this.setState({
      imageUrl: this.state.searchTerm,
      status: 'Loading image ....'
    });
  }

  onLoad = () => {
    this.setState({
      status: 'Image loaded'
    });
  }

  onError = () => {
    this.setState({
      status: 'Error!'
    });
  }

  render() {
    const {
      searchTerm,
      imageUrl,
      status
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
          Status: {status}
        </Row>
        <Row>
          <Image
            imageUrl={imageUrl}
            onLoad={this.onLoad}
            onError={this.onError} />
        </Row>
      </Container>
    );
  }
}

export default App;
