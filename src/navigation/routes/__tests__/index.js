import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { fakeStore } from 'app/scripts/helpers';

import * as constants from 'src/navigation/constants';
import routes from 'src/navigation/routes';


import NotFound from 'src/components/NotFound';
import LandingContainer from 'src/onboarding/LandingContainer';
import LoginContainer from 'src/auth/LoginContainer';
import ActivationContainer from 'src/auth/ActivationContainer';

import WelcomeContainer from 'src/onboarding/WelcomeContainer';
import ProfilePictureContainer from 'src/onboarding/ProfilePictureContainer';
import CameraRollContainer from 'src/onboarding/CameraRollContainer';


const componentForRoute = (constant) => shallow(
  <Provider store={fakeStore}>
    {routes(constant)}
  </Provider>
);

describe('navigation/navigator', () => {
  describe('displays correct component for route key', () => {
    it('should have a default route', () => {
      expect(componentForRoute('Margle')
        .find(NotFound).length).toEqual(1);
    });


    it('ROUTE_LANDING', () => {
      expect(componentForRoute(constants.ROUTE_LANDING)
        .find(LandingContainer).length).toEqual(1);
    });


    it('ROUTE_AUTH_ACTIVATION', () => {
      expect(componentForRoute(constants.ROUTE_AUTH_ACTIVATION)
        .find(ActivationContainer).length).toEqual(1);
    });
    it('ROUTE_AUTH_LOGIN', () => {
      expect(componentForRoute(constants.ROUTE_AUTH_LOGIN)
        .find(LoginContainer).length).toEqual(1);
    });


    it('ROUTE_ONBOARDING_WELCOME', () => {
      expect(componentForRoute(constants.ROUTE_ONBOARDING_WELCOME)
        .find(WelcomeContainer).length).toEqual(1);
    });
    it('ROUTE_ONBOARDING_PROFILE_PICTURE', () => {
      expect(componentForRoute(constants.ROUTE_ONBOARDING_PROFILE_PICTURE)
        .find(ProfilePictureContainer).length).toEqual(1);
    });
    it('ROUTE_ONBOARDING_CAMERA_ROLL', () => {
      expect(componentForRoute(constants.ROUTE_ONBOARDING_CAMERA_ROLL)
        .find(CameraRollContainer).length).toEqual(1);
    });
  });
});
