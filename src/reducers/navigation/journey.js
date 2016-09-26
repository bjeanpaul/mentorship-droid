import * as routes from 'src/constants/routes';


import {
  createStack,
  createRoute,
} from 'src/navigationHelpers';


export default (state = createStack([
  createRoute(routes.ROUTE_JOURNEY),
]), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
