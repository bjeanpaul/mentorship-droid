import { connect } from 'react-redux';
import * as nav from '../actions';
import Landing from 'src/onboarding/Landing';


export default connect(null, {
  onGetStartedPress: nav.pushActivationRoute,
  onLoginPress: nav.pushLoginRoute,
})(Landing);
