import { connect } from 'react-redux';
import CameraRoll from 'src/views/CameraRoll';
import { updateProfilePicture } from 'src/actions/onboarding';

export default connect(null, {
  onPhotoPress: path => updateProfilePicture(path),
})(CameraRoll);
