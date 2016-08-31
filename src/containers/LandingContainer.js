import { connect } from 'react-redux';
import { landingGetStarted, landingLogin } from 'src/actions/landing';
import Landing from 'src/views/Landing';


export default connect(null, {
  onGetStartedPress: landingGetStarted,
  onLoginPress: landingLogin,
})(Landing);
