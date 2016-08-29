import { connect } from 'react-redux';
import Hello from './Hello';
import { pushProfilePictureRoute } from 'src/navigation/actions';

import { getProfileId } from 'src/reducers/auth';
import { getProfile } from 'src/reducers/profile';

export default connect(
  state => ({
    name: getProfile(state, getProfileId(state)).firstName,
  }), {
    onCompleteProfilePress: pushProfilePictureRoute,
  }
)(Hello);
