import { connect } from 'react-redux';
import CameraRoll from 'src/views/CameraRoll';
import { updateProfileImage } from 'src/actions/onboarding';

export default connect(null, {
  onPhotoPress: path => updateProfileImage(path),
})(CameraRoll);
