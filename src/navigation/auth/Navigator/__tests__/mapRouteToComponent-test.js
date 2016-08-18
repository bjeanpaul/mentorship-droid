import mapRouteToComponent from '../mapRouteToComponent';
import * as constants from 'src/navigation/auth/constants';

import LandingContainer from 'src/onboarding/LandingContainer';

// TODO: Login, Activation, ResetPassword
describe('navigation/auth/navigator', () => {
  describe('mapRouteToComponent', () => {

    it('landing', () => {
      expect(mapRouteToComponent(constants.AUTH_ROUTE_LANDING))
        .toEqual(LandingContainer);
    });


  });
});
