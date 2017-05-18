import * as constants from 'src/constants/forgotPassword';
import * as statuses from 'src/statuses/forgotPassword';

export const createInitialState = () => ({
  status: statuses.forgotPasswordEmailStatusIdle(),
});


export default (state = createInitialState(), action) => {
  switch (action.type) {
    case constants.FORGOT_PASSWORD_SEND_EMAIL_REQUEST:
      return {
        ...state,
        status: statuses.forgotPasswordEmailStatusBusy(),
      };

    case constants.SHOW_FORGOT_PASSWORD_RESET:
      return {
        ...state,
        status: statuses.forgotPasswordResetStatusIdle(),
      };

    case constants.FORGOT_PASSWORD_RESET_REQUEST:
      return {
        ...state,
        status: statuses.forgotPasswordResetStatusBusy(),
      };

    case constants.FORGOT_PASSWORD_RESET_BAD_TOKEN:
      return {
        ...state,
        status: statuses.forgotPasswordResetStatusBadToken(),
      };

    default:
      return state;
  }
};
