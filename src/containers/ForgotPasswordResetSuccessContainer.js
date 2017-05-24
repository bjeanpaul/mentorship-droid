import { connect } from 'react-redux';

import ForgotPasswordResetSuccess from 'src/views/ForgotPasswordResetSuccess';
import { resetToLoginScreen } from 'src/actions/forgotPassword';


export const mapDispatchToProps = {
  onDismissPress: resetToLoginScreen,
  onLoginPress: resetToLoginScreen,
};


export default connect(null, mapDispatchToProps)(ForgotPasswordResetSuccess);
