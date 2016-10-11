import {connect} from 'react-redux';
import App from './App';
import {addImage} from '../actions/images';

const mapDispatchToProps = (dispatch) => ({
  onAddImage: (src) => dispatch(addImage(src))
});

export default connect(null, mapDispatchToProps)(App);
