import { connect } from 'react-redux';
import CameraRoll from 'src/profile/CameraRoll';
import * as actions from 'src/navigation/onboarding/actions';
import { changeProfileImage } from 'src/profile/actions';


const mapDispatchToProps = (dispatch) => {
  return {
    onPhotoPress: path => {
      dispatch(changeProfileImage(path));
      return dispatch(actions.popOnboardingRoute());
    },
  };
};

export default connect(null, mapDispatchToProps)(CameraRoll);
