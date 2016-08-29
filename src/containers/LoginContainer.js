import { connect } from 'react-redux';
import { login } from './actions';
import Login from './Login';


export default connect(
  (state) => state.auth, {
    onLoginPress: login,
  }
)(Login);
