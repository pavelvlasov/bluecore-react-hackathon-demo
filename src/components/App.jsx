import React, {Component, PropTypes} from 'react';

import SearchBar from './search_bar';
import ImageList from './image_list';

import {Container} from 'bluecore-ui-kit/lib/layout/Container/Container';
import {Row} from 'bluecore-ui-kit/lib/layout/Row/Row';

class App extends Component {
  static propTypes = {
    onAddImage: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };
  }

  onChange = (searchTerm) => {
    this.setState({searchTerm});
  }

  onSubmit = () => {
    this.props.onAddImage(this.state.searchTerm);
    this.setState({searchTerm: ''});
  }

  render() {
    const {
      searchTerm
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
          <ImageList />
        </Row>
      </Container>
    );
  }
}

export default App;
