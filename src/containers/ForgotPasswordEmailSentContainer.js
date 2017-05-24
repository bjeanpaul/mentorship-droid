import { connect } from 'react-redux';

import ForgotPasswordEmailSent from 'src/views/ForgotPasswordEmailSent';
import { dismissScreen } from 'src/actions/navigation';
import { showForgotPasswordReset } from 'src/actions/forgotPassword';


export const mapDispatchToProps = {
  onDismissPress: dismissScreen,
  onResetPress: showForgotPasswordReset,
};


export default connect(null, mapDispatchToProps)(ForgotPasswordEmailSent);
