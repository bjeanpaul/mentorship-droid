import { connect } from 'react-redux';

import ForgotPasswordEmail from 'src/views/ForgotPasswordEmail';
import { dismissScreen } from 'src/actions/navigation';
import { emailForgotPasswordToken } from 'src/actions/forgotPassword';

export const mapStateToProps = state => {
  console.log(state.forgotPassword.status);
  return state.forgotPassword;
};

export const mapDispatchToProps = {
  onDismissPress: dismissScreen,
  onSendEmailPress: emailForgotPasswordToken,
};


export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordEmail);
