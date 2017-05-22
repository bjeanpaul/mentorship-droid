import { connect } from 'react-redux';

import ForgotPasswordReset from 'src/views/ForgotPasswordReset';
import { dismissScreen } from 'src/actions/navigation';
import { resetForgotPassword } from 'src/actions/forgotPassword';
import * as constants from 'src/constants/forgotPassword';

export const mapStateToProps = state => {
  switch (state.forgotPassword.status.type) {
    case constants.FORGOT_PASSWORD_RESET_STATUS_BAD_TOKEN:
      return ({ message: 'Reset code is incorrect, please check your email' });

    default:
      return ({ message: '' });
  }
};

export const mapDispatchToProps = {
  onBackPress: dismissScreen,
  onLoginPress: resetForgotPassword,
};


export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordReset);
