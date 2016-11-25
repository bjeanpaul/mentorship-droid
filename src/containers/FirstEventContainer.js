import { connect } from 'react-redux';
import { FirstEvent } from 'src/components';
import { getAuthUserProfile } from 'src/store/helpers';
import { addScheduledCall } from 'src/actions/schedule';


const mapStateToProps = state => ({
  firstName: getAuthUserProfile(state).firstName,
});

export { mapStateToProps };
export default connect(mapStateToProps, {
  onGetStartedPress: () => addScheduledCall(),
})(FirstEvent);
