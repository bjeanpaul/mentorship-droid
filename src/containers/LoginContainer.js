import { connect } from 'react-redux';
import { login } from 'src/actions/auth';
import { dismissScreen } from 'src/actions/navigation';
import Login from 'src/views/Login';


export default connect(state => state.auth, {
  onLoginPress: login,
  onBackPress: dismissScreen,
})(Login);
