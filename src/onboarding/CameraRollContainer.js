import { connect } from 'react-redux';
import CameraRoll from 'src/profile/CameraRoll';
import { changeProfileImage } from 'src/onboarding/actions';

export default connect(null, {
  onPhotoPress: path => changeProfileImage(path),
})(CameraRoll);
