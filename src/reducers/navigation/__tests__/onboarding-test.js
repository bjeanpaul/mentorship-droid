import reduce from 'src/reducers/navigation/onboarding';
import * as onboarding from 'src/actions/onboarding';
import * as routes from 'src/constants/routes';

import {
  createStack,
  createRoute,
  push,
  replaceAt,
} from 'src/navigationHelpers';


describe('src/reducers/navigation/onboarding', () => {
  describe('ONBOARDING_SETUP_PROFILE_REQUEST', () => {
    it('should replace the onboarding route with the saving route', () => {
      const action = onboarding.setupProfile.request();

      const oldRoute = createRoute(routes.ROUTE_ONBOARDING);
      const newRoute = createRoute(routes.ROUTE_ONBOARDING_SAVING);

      const state = push(createStack(), oldRoute);

      expect(reduce(state, action))
        .toEqual(replaceAt(state, routes.ROUTE_ONBOARDING, newRoute));
    });

    it('should push on the saving route if there is no onboarding route', () => {
      const action = onboarding.setupProfile.request();
      const route = createRoute(routes.ROUTE_ONBOARDING_SAVING);

      expect(reduce(createStack(), action))
        .toEqual(push(createStack(), route));
    });
  });
});
