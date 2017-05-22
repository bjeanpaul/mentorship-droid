import { apiAction, staticAction } from 'src/actionHelpers';
import * as constants from 'src/constants/forgotPassword';
import * as api from 'src/api';

const { ApiAuthorizationError, ApiDataInvalidError } = api;


export const emailForgotPasswordToken = apiAction({
  method: api.emailForgotPasswordToken,
  request: staticAction(constants.FORGOT_PASSWORD_SEND_EMAIL_REQUEST),
  success: staticAction(constants.FORGOT_PASSWORD_SEND_EMAIL_SUCCESS),
  failures: [
    [ApiDataInvalidError, staticAction(constants.FORGOT_PASSWORD_SEND_EMAIL_BAD_ADDRESS)],
  ],
});


export const resetForgotPassword = apiAction({
  method: api.resetForgotPassword,
  request: staticAction(constants.FORGOT_PASSWORD_RESET_REQUEST),
  success: staticAction(constants.FORGOT_PASSWORD_RESET_SUCCESS),
  failures: [
    [ApiAuthorizationError, staticAction(constants.FORGOT_PASSWORD_RESET_BAD_TOKEN)],
  ],
});


export const showForgotPasswordEmail = staticAction(
  constants.SHOW_FORGOT_PASSWORD_EMAIL);


export const showForgotPasswordReset = staticAction(
  constants.SHOW_FORGOT_PASSWORD_RESET);
