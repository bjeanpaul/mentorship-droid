import { connect } from 'react-redux';
import { FirstEvent } from 'src/components';
import { getAuthUserProfile } from 'src/stores/helpers';
import { changeNavToScheduledCallsTab } from 'src/actions/navigation';


const mapStateToProps = state => ({
  firstName: getAuthUserProfile(state).firstName,
});

export { mapStateToProps };
export default connect(mapStateToProps, {
  onGetStartedPress: changeNavToScheduledCallsTab,
})(FirstEvent);
