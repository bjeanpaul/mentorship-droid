import * as routes from 'src/constants/routes';
import * as onboarding from 'src/constants/onboarding';


import {
  popCurrent,
  insertAfterCurrent,
  createRoute,
  createStack,
} from 'src/navigationHelpers';


export default (state = createStack([
  createRoute(routes.ROUTE_ONBOARDING),
]), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
