import { connect } from 'react-redux';
import { login } from 'src/actions/auth';
import Login from 'src/views/Login';


export default connect(
  (state) => state.auth, {
    onLoginPress: login,
  }
)(Login);
