import { connect } from 'react-redux';
import { login } from 'src/actions/auth';
import { showForgotPasswordEmail } from 'src/actions/forgotPassword';
import { dismissScreen } from 'src/actions/navigation';
import Login from 'src/views/Login';


export default connect(state => state.auth, {
  onForgotPasswordPress: showForgotPasswordEmail,
  onLoginPress: login,
  onBackPress: dismissScreen,
})(Login);
