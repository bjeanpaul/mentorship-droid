import { connect } from 'react-redux';
import ProfilePicture from 'src/profile/ProfilePicture';
import * as actions from '../actions';
import { getProfile } from 'src/profile/reducer';
import { getProfileId } from 'src/auth/reducer';

const mapStateToProps = state => ({
  picturePath: getProfile(state, getProfileId(state)).picture,
});

export default connect(mapStateToProps, {
  onChoosePhotoPress: actions.pushCameraRollRoute,
})(ProfilePicture);
