import * as onboarding from 'src/constants/onboarding';
import * as routes from 'src/constants/routes';
import { push, pop, replaceOrPush, createRoute } from 'src/navigationHelpers';


export default (state, action) => {
  switch (action.type) {
    case onboarding.ONBOARDING_SETUP_PROFILE_REQUEST: {
      const route = createRoute(routes.ROUTE_ONBOARDING_SAVING);
      return replaceOrPush(state, routes.ROUTE_ONBOARDING, route);
    }

    default:
      return state;
  }
};
