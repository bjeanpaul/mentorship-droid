import * as routes from 'src/constants/routes';
import * as sync from 'src/constants/sync';


import {
  push,
  createStack,
  createRoute,
  popCurrent,
} from 'src/navigationHelpers';


export default (state = createStack([
  createRoute(routes.ROUTE_JOURNEY),
]), action) => {
  switch (action.type) {
    case sync.LOAD_REQUEST:
      return push(state, createRoute(routes.ROUTE_LOADING));

    case sync.LOAD_SUCCESS:
      return popCurrent(state);

    default:
      return state;
  }
};
