import { connect } from 'react-redux';
import CameraRoll from 'src/views/CameraRoll';
import { changeProfileImage } from 'src/actions/onboarding';

export default connect(null, {
  onPhotoPress: path => changeProfileImage(path),
})(CameraRoll);
