import * as routes from 'src/constants/routes';
import * as landing from 'src/constants/landing';
import { push, createStack, createRoute } from 'src/navigationHelpers';


export default (state = createStack([
  createRoute(routes.ROUTE_LANDING),
]), action) => {
  switch (action.type) {
    case landing.SHOW_ACTIVATION_REQUEST:
      return push(state, createRoute(routes.ROUTE_AUTH_ACTIVATION));

    case landing.SHOW_LOGIN_REQUEST:
      return push(state, createRoute(routes.ROUTE_AUTH_LOGIN));

    default:
      return state;
  }
};
