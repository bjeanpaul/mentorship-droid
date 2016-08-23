import { connect } from 'react-redux';
import Hello from 'src/onboarding/Hello';
import * as nav from 'src/navigation/actions';

import { getProfileId } from 'src/auth/reducer';
import { getProfile } from 'src/profile/reducer';


const mapStateToProps = state => ({
  name: '',
});


export default connect(mapStateToProps, {
  onCompleteProfilePress: nav.pushProfilePictureRoute,
})(Hello);
