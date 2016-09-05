import { connect } from 'react-redux';
import Hello from 'src/views/Hello';
import { startProfile } from 'src/actions/onboarding';
import { getAuthUserProfile } from 'src/stores/helpers';


export default connect(
  state => ({
    name: getAuthUserProfile(state).firstName,
  }), {
    onCompleteProfilePress: startProfile,
  }
)(Hello);
