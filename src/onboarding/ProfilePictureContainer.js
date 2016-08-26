import { connect } from 'react-redux';
import ProfilePicture from 'src/profile/ProfilePicture';
import { pushCameraRollRoute } from 'src/navigation/actions';

export default connect(
  state => ({
    imagePath: state.onboarding.profilePicture,
  }), {
    onChoosePhotoPress: pushCameraRollRoute,
  }
)(ProfilePicture);
