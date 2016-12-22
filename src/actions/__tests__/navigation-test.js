jest.mock('BackAndroid');

import { constant, noop } from 'lodash';
import BackAndroid from 'BackAndroid';

import * as actions from 'src/actions/navigation';
import * as routes from 'src/constants/routes';
import * as constants from 'src/constants/navigation';
import { fakeState, fakeContext } from 'app/scripts/helpers';
import { createStack, createRoute } from 'src/navigationHelpers';


describe('actions/navigation', () => {
  beforeEach(() => {
    BackAndroid.exitApp.mockClear();
  });

  describe('changeNavTab', () => {
    it('should create an action for changing the nav tab', () => {
      expect(actions.changeNavTab(constants.NAV_TAB_ACTIVITIES)).toEqual({
        type: constants.NAV_TAB_CHANGE,
        payload: { tab: constants.NAV_TAB_ACTIVITIES },
      });
    });
  });

  describe('dismissNative', () => {
    it('should exit the app if on the landing route', () => {
      const state = fakeState();
      const ctx = fakeContext();

      state.navigation.top = createStack([createRoute(routes.ROUTE_LANDING)]);
      actions.dismissNative()(noop, ctx, constant(state));

      expect(BackAndroid.exitApp.mock.calls).toEqual([[]]);
    });

    it('should exit the app if on the navigator route', () => {
      const state = fakeState();
      const ctx = fakeContext();

      state.navigation.top = createStack([createRoute(routes.ROUTE_NAVIGATOR)]);
      actions.dismissNative()(noop, ctx, constant(state));

      expect(BackAndroid.exitApp.mock.calls).toEqual([[]]);
    });

    it('should dispatch dismiss screen action otherwise', () => {
      const state = fakeState();
      const ctx = fakeContext();
      const dispatch = jest.fn();

      state.navigation.top = createStack([createRoute('FOO')]);
      actions.dismissNative()(dispatch, ctx, constant(state));

      expect(dispatch.mock.calls).toEqual([[actions.dismissScreen()]]);
    });
  });
});
