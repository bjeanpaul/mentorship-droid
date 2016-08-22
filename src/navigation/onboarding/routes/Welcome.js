import { connect } from 'react-redux';
import Hello from 'src/onboarding/Hello';
import * as actions from '../actions';


const mapStateToProps = state => ({
  name: state.entities.profile && state.entities.profile[state.auth.profileId].name,
});


export default connect(mapStateToProps, {
  onCompleteProfilePress: actions.pushProfilePictureRoute,
})(Hello);
