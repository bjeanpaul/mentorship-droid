import { connect } from 'react-redux';
import Hello from './Hello';
import { pushProfilePictureRoute } from 'src/navigation/actions';

import { getProfileId } from 'src/auth/reducer'
import { getProfile } from 'src/profile/reducer';

export default connect(
  state => ({
    name: getProfile(state, getProfileId(state)).firstName,
  }), {
    onCompleteProfilePress: pushProfilePictureRoute,
  }
)(Hello);
