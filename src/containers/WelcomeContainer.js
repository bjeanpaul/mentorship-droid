import { connect } from 'react-redux';
import Hello from 'src/views/Hello';
import { pushProfilePictureRoute } from 'src/actions/navigation';

import { getProfileId } from 'src/reducers/auth';
import { getProfile } from 'src/reducers/profile';

export default connect(
  state => ({
    name: 'XXXX', //getProfile(state, getProfileId(state)).firstName,
  }), {
    onCompleteProfilePress: pushProfilePictureRoute,
  }
)(Hello);
