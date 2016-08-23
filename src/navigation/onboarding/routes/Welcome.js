import { connect } from 'react-redux';
import Hello from 'src/onboarding/Hello';
import * as actions from '../actions';

import { getProfileId } from 'src/auth/reducer';
import { getProfile } from 'src/profile/reducer';


const mapStateToProps = state => ({
  name: getProfile(state, getProfileId(state)).name,
});


export default connect(mapStateToProps, {
  onCompleteProfilePress: actions.pushProfilePictureRoute,
})(Hello);
