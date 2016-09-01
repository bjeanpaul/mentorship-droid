import * as routes from 'src/constants/routes';
import * as landing from 'src/actions/landing';
import * as navigation from 'src/actions/navigation';
import * as auth from 'src/actions/auth';
import * as onboarding from 'src/actions/onboarding';
import reduce from 'src/reducers/navigation';

import {
  createRoute,
  back,
  forward,
  push,
  pushList,
  popCurrent,
  insertAfterCurrent,
} from 'src/navigationHelpers';


const fakeState = () => ({
  routes: ['A', 'B', 'C'].map(createRoute),
  index: 1,
});


describe('navigation/reducer', () => {
  describe('NAVIGATE_BACK_REQUEST', () => {
    it('should go back', () => {
      expect(reduce(fakeState(), navigation.navigateBack()))
        .toEqual(back(fakeState()));
    });
  });

  describe('NAVIGATE_FORWARD_REQUEST', () => {
    it('should go forward', () => {
      expect(reduce(fakeState(), navigation.navigateForward()))
        .toEqual(forward(fakeState()));
    });
  });

  describe('SHOW_ACTIVATION_REQUEST', () => {
    it('should push the activation route', () => {
      expect(reduce(fakeState(), landing.showActivation()))
        .toEqual(push(fakeState(), createRoute(routes.ROUTE_AUTH_ACTIVATION)));
    });
  });

  describe('SHOW_LOGIN_REQUEST', () => {
    it('should push the login route', () => {
      expect(reduce(fakeState(), landing.showLogin()))
        .toEqual(push(fakeState(), createRoute(routes.ROUTE_AUTH_LOGIN)));
    });
  });

  describe('AUTH_LOGIN_SUCCESS', () => {
    it('should push the welcome route', () => {
      expect(reduce(fakeState(), auth.loginSuccess()))
        .toEqual(push(fakeState(), createRoute(routes.ROUTE_ONBOARDING_WELCOME)));
    });
  });

  describe('ONBOARDING_START_PROFILE', () => {
    it('should push on the onboarding steps', () => {
      expect(reduce(fakeState(), onboarding.startProfile()))
        .toEqual(pushList(fakeState(), routes.ONBOARDING_STEPS.map(createRoute)));
    });
  });

  describe('ONBOARDING_CHOOSE_PROFILE_PICTURE', () => {
    it('should insert the camera roll route', () => {
      const cameraRollRoute = createRoute(routes.ROUTE_ONBOARDING_CAMERA_ROLL);
      expect(reduce(fakeState(), onboarding.chooseProfilePicture()))
        .toEqual(insertAfterCurrent(fakeState(), cameraRollRoute));
    });
  });

  describe('ONBOARDING_UPDATE_PROFILE_PICTURE', () => {
    it('should pop from the state', () => {
      expect(reduce(fakeState(), onboarding.updateProfilePicture()))
        .toEqual(popCurrent(fakeState()));
    });
  });
});
