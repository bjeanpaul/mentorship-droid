import { connect } from 'react-redux';
import ProfilePicture from 'src/profile/ProfilePicture';
import * as navigate from '../actions';

const mapStateToProps = state => ({
  imagePath: state.profile.newProfileImagePath,
});

export default connect(mapStateToProps, {
  onChoosePhotoPress: navigate.pushCameraRollRoute,
})(ProfilePicture);
