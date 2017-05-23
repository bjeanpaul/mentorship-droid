import { connect } from 'react-redux';

import ForgotPasswordEmail from 'src/views/ForgotPasswordEmail';
import { dismissScreen } from 'src/actions/navigation';
import { emailForgotPasswordToken } from 'src/actions/forgotPassword';

export const mapStateToProps = state => {
  return { status: state.forgotPassword.status.type };
};

export const mapDispatchToProps = {
  onDismissPress: dismissScreen,
  onSendEmailPress: emailForgotPasswordToken,
};


export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordEmail);
