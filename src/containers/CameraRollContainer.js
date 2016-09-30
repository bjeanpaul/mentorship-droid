import { connect } from 'react-redux';

import CameraRoll from 'src/views/CameraRoll';
import { dismissScreen } from 'src/actions/navigation';
import { changeProfilePicture } from 'src/actions/onboarding';


export default connect(null, {
  onBackPress: dismissScreen,
  onPhotoPress: changeProfilePicture,
})(CameraRoll);
