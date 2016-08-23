import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { fakeStore } from 'app/scripts/helpers';
import mapRouteToComponent from '../mapRouteToComponent';
import * as constants from 'src/navigation/auth/constants';
import LandingContainer from 'src/onboarding/LandingContainer';
import LoginContainer from 'src/auth/LoginContainer';
import ActivationContainer from 'src/auth/ActivationContainer';
import ResetPasswordContainer from 'src/auth/ResetPasswordContainer';


describe('navigation/auth/navigator', () => {
  describe('mapRouteToComponent', () => {
    it('landing', () => {
      const el = shallow(
        <Provider store={fakeStore}>
          {mapRouteToComponent(constants.AUTH_ROUTE_LANDING)}
        </Provider>
      );
      expect(el.find(LandingContainer).length).toEqual(1);
    });

    it('log in', () => {
      const el = shallow(
        <Provider store={fakeStore}>
          {mapRouteToComponent(constants.AUTH_ROUTE_LOGIN)}
        </Provider>
      );
      expect(el.find(LoginContainer).length).toEqual(1);
    });

    it('activation', () => {
      const el = shallow(
        <Provider store={fakeStore}>
          {mapRouteToComponent(constants.AUTH_ROUTE_ACTIVATE)}
        </Provider>
      );
      expect(el.find(ActivationContainer).length).toEqual(1);
    });

    it('reset password', () => {
      const el = shallow(
        <Provider store={fakeStore}>
          {mapRouteToComponent(constants.AUTH_ROUTE_RESET_PASSWORD)}
        </Provider>
      );
      expect(el.find(ResetPasswordContainer).length).toEqual(1);
    });
  });
});
