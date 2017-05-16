import * as routes from 'src/constants/routes';
import * as forgotPassword from 'src/constants/forgotPassword';
import { push, createRoute } from 'src/navigationHelpers';


export default (state, action) => {
  switch (action.type) {
    case forgotPassword.SHOW_FORGOT_PASSWORD_EMAIL: {
      return push(state, createRoute(routes.ROUTE_FORGOT_PASSWORD_EMAIL));
    }

    default:
      return state;
  }
};
