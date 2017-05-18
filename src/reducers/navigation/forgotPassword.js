import * as routes from 'src/constants/routes';
import * as forgotPassword from 'src/constants/forgotPassword';
import { push, createRoute } from 'src/navigationHelpers';


export default (state, action) => {
  switch (action.type) {
    case forgotPassword.SHOW_FORGOT_PASSWORD_EMAIL: {
      return push(state, createRoute(routes.ROUTE_FORGOT_PASSWORD_EMAIL));
    }

    case forgotPassword.FORGOT_PASSWORD_SEND_EMAIL_REQUEST: {
      return push(state, createRoute(routes.ROUTE_LOADING));
    }

    case forgotPassword.FORGOT_PASSWORD_SEND_EMAIL_SUCCESS: {
      return push(state, createRoute(routes.ROUTE_FORGOT_PASSWORD_EMAIL_SENT));
    }

    default:
      return state;
  }
};
