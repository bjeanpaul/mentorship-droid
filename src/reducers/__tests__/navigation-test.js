import * as routes from 'src/constants/routes';
import * as landing from 'src/actions/landing';
import * as navigation from 'src/actions/navigation';
import * as auth from 'src/actions/auth';
import * as onboarding from 'src/actions/onboarding';
import reduce from 'src/reducers/navigation';

import {
  reset,
  push,
  pop,
  back,
  forward,
  insert,
  createRoute,
} from 'src/navigationHelpers';


const fakeState = () => ({
  routes: ['A', 'B', 'C'].map(createRoute),
  index: 1,
});


describe('navigation/reducer', () => {
  describe('NAVIGATE_BACK', () => {
    it('should go back', () => {
      expect(reduce(fakeState(), navigation.navigateBack()))
        .toEqual(back(fakeState()));
    });
  });

  describe('NAVIGATE_FORWARD', () => {
    it('should go forward', () => {
      expect(reduce(fakeState(), navigation.navigateForward()))
        .toEqual(forward(fakeState()));
    });
  });

  describe('LANDING_GET_STARTED', () => {
    it('should push the activation route', () => {
      expect(reduce(fakeState(), landing.landingGetStarted()))
        .toEqual(push(fakeState(), createRoute(routes.ROUTE_AUTH_ACTIVATION)));
    });
  });

  describe('LANDING_LOGIN', () => {
    it('should push the login route', () => {
      expect(reduce(fakeState(), landing.landingLogin()))
        .toEqual(push(fakeState(), createRoute(routes.ROUTE_AUTH_LOGIN)));
    });
  });

  describe('AUTH_LOGIN_SUCCESS', () => {
    it('should reset navigation state to contain only the welcome route', () => {
      expect(reduce(fakeState(), auth.loginSuccess()))
        .toEqual(reset(fakeState(), [createRoute(routes.ROUTE_ONBOARDING_WELCOME)]));
    });
  });

  describe('ONBOARDING_START_PROFILE', () => {
    it('should reset navigation state to the onboarding steps', () => {
      expect(reduce(fakeState(), onboarding.startProfile()))
        .toEqual(reset(fakeState(), routes.ONBOARDING_STEPS.map(createRoute), 0));
    });
  });

  describe('ONBOARDING_CHOOSE_PROFILE_PICTURE', () => {
    it('should insert the camera roll route', () => {
      expect(reduce(fakeState(), onboarding.chooseProfilePicture()))
        .toEqual(insert(fakeState(), createRoute(routes.ROUTE_ONBOARDING_CAMERA_ROLL)));
    });
  });

  describe('ONBOARDING_UPDATE_PROFILE_PICTURE', () => {
    it('should pop from the state', () => {
      expect(reduce(fakeState(), onboarding.updateProfilePicture()))
        .toEqual(pop(fakeState()));
    });
  });
});
