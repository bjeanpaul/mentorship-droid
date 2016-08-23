import { connect } from 'react-redux';
import Hello from './Hello';
import { pushProfilePictureRoute } from 'src/navigation/actions';

import { getProfileName } from 'src/profile/reducer';

export default connect(
  state => ({
    name: getProfileName(state),
  }), {
    onCompleteProfilePress: pushProfilePictureRoute,
  }
)(Hello);
