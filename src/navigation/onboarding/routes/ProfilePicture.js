import { connect } from 'react-redux';
import ProfilePicture from 'src/profile/ProfilePicture';
import * as actions from '../actions';

const mapStateToProps = state => ({
  imagePath: state.profile.newProfileImagePath,
});

export default connect(mapStateToProps, {
  onChoosePhotoPress: actions.pushCameraRollRoute,
})(ProfilePicture);
