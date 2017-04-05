import { apiAction, dataAction, staticAction } from 'src/actionHelpers';
import * as constants from 'src/constants/calls';
import * as api from 'src/api';

const { ApiAuthorizationError } = api;


export const emailForgotPasswordToken = apiAction({
  method: api.emailForgotPasswordToken,
  request: staticAction(constants.FORGOT_PASSWORD_SEND_EMAIL_REQUEST),
  success: staticAction(constants.FORGOT_PASSWORD_SEND_EMAIL_SUCCESS),
});


export const resetForgotPassword = apiAction({
  method: api.resetForgotPassword,
  request: staticAction(constants.FORGOT_PASSWORD_RESET_REQUEST),
  success: staticAction(constants.FORGOT_PASSWORD_RESET_SUCCESS),
  failures: [
    [ApiAuthorizationError, staticAction(constants.FORGOT_PASSWORD_RESET_BAD_TOKEN)],
  ],
});
