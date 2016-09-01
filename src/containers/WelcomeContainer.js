import { connect } from 'react-redux';
import Hello from 'src/views/Hello';
import { startProfile } from 'src/actions/onboarding';

import { getProfileId } from 'src/reducers/auth';
import { getProfile } from 'src/reducers/profile';

export default connect(
  state => ({
    name: 'XXXX', //getProfile(state, getProfileId(state)).firstName,
  }), {
    onCompleteProfilePress: startProfile,
  }
)(Hello);
