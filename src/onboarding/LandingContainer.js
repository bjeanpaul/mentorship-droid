import { connect } from 'react-redux';
import Landing from './Landing';
import {
  pushActivateAccountRoute,
  pushLoginRoute,
} from 'src/navigation/auth/actions';

export default connect(
  null,
  {
    onGetStartedPress: pushActivateAccountRoute,
    onLoginPress: pushLoginRoute,
  }
)(Landing);
