import { connect } from 'react-redux';
import * as navigate from '../actions';
import CameraRoll from 'src/profile/CameraRoll';
import { changeProfileImage } from 'src/profile/actions';


const mapDispatchToProps = (dispatch) => {
  return {
    onPhotoPress: path => {
      dispatch(changeProfileImage(path));
      return dispatch(navigate.popOnboardingRoute());
    },
  };
};

export default connect(null, mapDispatchToProps)(CameraRoll);
