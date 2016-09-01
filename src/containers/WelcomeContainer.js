import { connect } from 'react-redux';
import Hello from 'src/views/Hello';
import { startProfile } from 'src/actions/onboarding';

import { getContext } from 'src/reducers/auth';
import { getProfile } from 'src/reducers/profile';

export default connect(
  state => ({
    name: getContext(state).profile.firstName,
  }), {
    onCompleteProfilePress: startProfile,
  }
)(Hello);
