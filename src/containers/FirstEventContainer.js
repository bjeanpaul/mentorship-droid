import { connect } from 'react-redux';
import { FirstEvent } from 'src/components';
import { noop } from 'lodash';
import { getAuthUserProfile } from 'src/stores/helpers';


const mapStateToProps = state => ({
  firstName: getAuthUserProfile(state).firstName,
  onGetStartedPress: noop, // TODO
});

export { mapStateToProps };
export default connect(mapStateToProps)(FirstEvent);
