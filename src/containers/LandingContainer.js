import { connect } from 'react-redux';
import * as nav from 'src/actions/navigation';
import Landing from 'src/views/Landing';


export default connect(null, {
  onGetStartedPress: nav.pushActivationRoute,
  onLoginPress: nav.pushLoginRoute,
})(Landing);
