import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { fakeStore } from 'app/scripts/helpers';

import * as constants from '../../constants';
import mapRouteToComponent from '../index';
import NotFound from 'src/components/NotFound';
import Welcome from '../Welcome';
import ProfilePicture from '../ProfilePicture';
import CameraRoll from '../CameraRoll';

describe('navigation/onboarding/navigator', () => {
  describe('mapRouteToComponent', () => {
    it('hello', () => {
      const el = shallow(
        <Provider store={fakeStore}>
          {mapRouteToComponent(constants.ONBOARDING_ROUTE_HELLO)}
        </Provider>
      );
      expect(el.find(Welcome).length).toEqual(1);
    });

    it('profile picture', () => {
      const el = shallow(
        <Provider store={fakeStore}>
          {mapRouteToComponent(constants.ONBOARDING_ROUTE_PROFILE_PICTURE)}
        </Provider>
      );
      expect(el.find(ProfilePicture).length).toEqual(1);
    });

    it('camera roll', () => {
      const el = shallow(
        <Provider store={fakeStore}>
          {mapRouteToComponent(constants.ONBOARDING_ROUTE_CAMERA_ROLL)}
        </Provider>
      );
      expect(el.find(CameraRoll).length).toEqual(1);
    });
  });
});
