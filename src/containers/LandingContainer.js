import { connect } from 'react-redux';
import { showActivation, showLogin } from 'src/actions/landing';
import Landing from 'src/views/Landing';


export default connect(null, {
  onGetStartedPress: showActivation,
  onLoginPress: showLogin,
})(Landing);
