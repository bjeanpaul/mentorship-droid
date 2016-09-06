import * as routes from 'src/constants/routes';
import * as sync from 'src/constants/sync';


import {
  push,
  createStack,
  createRoute,
} from 'src/navigationHelpers';


export default (state = createStack([
  createRoute(routes.ROUTE_LOADING),
]), action) => {
  switch (action.type) {
    case sync.LOAD_SUCCESS:
      return push(state, createRoute(routes.ROUTE_JOURNEY));

    default:
      return state;
  }
};
