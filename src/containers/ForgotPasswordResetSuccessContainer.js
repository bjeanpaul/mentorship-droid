import { connect } from 'react-redux';

import ForgotPasswordResetSuccess from 'src/views/ForgotPasswordResetSuccess';
import { dismissScreen } from 'src/actions/navigation';
import { resetToLoginScreen } from 'src/actions/forgotPassword';


export const mapDispatchToProps = {
  onDismissPress: dismissScreen,
  onLoginPress: resetToLoginScreen,
};


export default connect(null, mapDispatchToProps)(ForgotPasswordResetSuccess);
