import { connect } from 'react-redux';
import CameraRoll from 'src/views/CameraRoll';
import { changeProfilePicture } from 'src/actions/onboarding';

export default connect(null, {
  onPhotoPress: path => changeProfilePicture(path),
})(CameraRoll);
