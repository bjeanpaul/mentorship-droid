import { createStack } from 'src/navigationHelpers';

import * as routes from 'src/constants/routes';
import * as forgotPassword from 'src/constants/forgotPassword';
import { push, remove, createRoute } from 'src/navigationHelpers';


export default (state, action) => {
  switch (action.type) {
    case forgotPassword.SHOW_FORGOT_PASSWORD_EMAIL: {
      return push(state, createRoute(routes.ROUTE_FORGOT_PASSWORD_EMAIL));
    }

    case forgotPassword.FORGOT_PASSWORD_SEND_EMAIL_SUCCESS: {
      return push(state, createRoute(routes.ROUTE_FORGOT_PASSWORD_EMAIL_SENT));
    }

    case forgotPassword.SHOW_FORGOT_PASSWORD_RESET: {
      const newState = remove(state, routes.ROUTE_FORGOT_PASSWORD_EMAIL_SENT);
      return push(newState, createRoute(routes.ROUTE_FORGOT_PASSWORD_RESET));
    }

    case forgotPassword.FORGOT_PASSWORD_RESET_SUCCESS: {
      return push(state, createRoute(routes.ROUTE_FORGOT_PASSWORD_RESET_SUCCESS));
    }

    case forgotPassword.RESET_TO_LOGIN_SCREEN: {
      return createStack([
        createRoute(routes.ROUTE_LANDING),
        createRoute(routes.ROUTE_AUTH_LOGIN),
      ]);
    }

    case forgotPassword.FORGOT_PASSWORD_SEND_EMAIL_FAILURE:
    case forgotPassword.FORGOT_PASSWORD_RESET_FAILURE: {
      return push(state, createRoute(routes.ROUTE_API_ERROR));
    }

    case forgotPassword.FORGOT_PASSWORD_SEND_EMAIL_NETWORK_FAILURE:
    case forgotPassword.FORGOT_PASSWORD_RESET_NETWORK_FAILURE: {
      return push(state, createRoute(routes.ROUTE_NETWORK_ERROR));
    }

    default:
      return state;
  }
};
