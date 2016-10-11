import {connect} from 'react-redux';
import ImageList from './image_list';

import {
  removeImage,
  setErroredFlag,
  setLoadedFlag
} from '../../actions/images';

const mapStateToProps = (state) => ({
  images: state.images
});

const mapDispatchToProps = (dispatch) => ({
  onRemove: (id) => dispatch(removeImage(id)),
  onError: (id) => dispatch(setErroredFlag(id)),
  onLoad: (id) => dispatch(setLoadedFlag(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
