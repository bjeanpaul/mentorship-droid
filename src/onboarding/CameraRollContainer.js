import { connect } from 'react-redux';
import CameraRoll from 'src/profile/CameraRoll';
import { changeProfileImageAndPreview } from 'src/onboarding/actions';

export default connect(null, {
  onPhotoPress: path => changeProfileImageAndPreview(path),
})(CameraRoll);
