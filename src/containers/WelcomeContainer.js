import { connect } from 'react-redux';
import Hello from 'src/views/Hello';
import { startProfile } from 'src/actions/onboarding';
import { getContext } from 'src/stores/helpers';


export default connect(
  state => ({
    name: getContext(state).profile.firstName,
  }), {
    onCompleteProfilePress: startProfile,
  }
)(Hello);
