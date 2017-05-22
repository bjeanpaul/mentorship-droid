import { createStack } from 'src/navigationHelpers';

import * as routes from 'src/constants/routes';
import * as forgotPassword from 'src/constants/forgotPassword';
import { push, createRoute } from 'src/navigationHelpers';


export default (state, action) => {
  switch (action.type) {
    case forgotPassword.SHOW_FORGOT_PASSWORD_EMAIL: {
      return push(state, createRoute(routes.ROUTE_FORGOT_PASSWORD_EMAIL));
    }

    case forgotPassword.FORGOT_PASSWORD_SEND_EMAIL_SUCCESS: {
      return push(state, createRoute(routes.ROUTE_FORGOT_PASSWORD_EMAIL_SENT));
    }

    case forgotPassword.SHOW_FORGOT_PASSWORD_RESET:
      return push(state, createRoute(routes.ROUTE_FORGOT_PASSWORD_RESET));

    case forgotPassword.FORGOT_PASSWORD_RESET_REQUEST: {
      return push(state, createRoute(routes.ROUTE_LOADING));
    }

    case forgotPassword.FORGOT_PASSWORD_RESET_SUCCESS: {
      return createStack([
        createRoute(routes.ROUTE_LANDING),
        createRoute(routes.ROUTE_AUTH_LOGIN),
      ]);
    }

    default:
      return state;
  }
};
