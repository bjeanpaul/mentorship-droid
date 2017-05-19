import * as constants from 'src/constants/auth';
import { staticStatus } from 'src/helpers';


const forgotPasswordEmailStatusIdle = staticStatus(
  constants.FORGOT_PASSWORD_EMAIL_STATUS_IDLE);


const forgotPasswordEmailStatusBusy = staticStatus(
  constants.FORGOT_PASSWORD_EMAIL_STATUS_BUSY);


const forgotPasswordResetStatusIdle = staticStatus(
  constants.FORGOT_PASSWORD_RESET_STATUS_IDLE);


const forgotPasswordResetStatusBusy = staticStatus(
  constants.FORGOT_PASSWORD_RESET_STATUS_BUSY);


const forgotPasswordResetStatusBadToken = staticStatus(
  constants.FORGOT_PASSWORD_RESET_STATUS_BAD_TOKEN);


export {
  forgotPasswordEmailStatusIdle,
  forgotPasswordEmailStatusBusy,
  forgotPasswordResetStatusIdle,
  forgotPasswordResetStatusBusy,
  forgotPasswordResetStatusBadToken,
};
