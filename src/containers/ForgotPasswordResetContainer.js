import { connect } from 'react-redux';

import ForgotPasswordReset from 'src/views/ForgotPasswordReset';
import { dismissScreen } from 'src/actions/navigation';
import { resetForgotPassword } from 'src/actions/forgotPassword';

export const mapStateToProps = state => state.forgotPassword;

export const mapDispatchToProps = {
  onDismissPress: dismissScreen,
  onLogInPress: resetForgotPassword,
};


export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordReset);
