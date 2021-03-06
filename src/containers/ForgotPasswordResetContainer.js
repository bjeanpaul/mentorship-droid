import { connect } from 'react-redux';

import ForgotPasswordReset from 'src/views/ForgotPasswordReset';
import { dismissScreen } from 'src/actions/navigation';
import { resetForgotPassword } from 'src/actions/forgotPassword';

export const mapStateToProps = state => {
  return state.forgotPassword;
};

export const mapDispatchToProps = {
  onBackPress: dismissScreen,
  onResetPress: resetForgotPassword,
};


export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordReset);
