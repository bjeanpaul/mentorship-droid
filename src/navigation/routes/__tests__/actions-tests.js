import * as constants from 'src/constants/navigation';

import ROUTE_ACTIONS from 'src/navigation/routes/actions';
import { AUTH_LOGIN_SUCCESS } from 'src/constants/auth';
import { ONBOARDING_CHANGE_PROFILE } from 'src/constants/onboarding';


describe('navigation/routes', () => {
  describe('navigation actions caused by other actions', () => {
    it('AUTH_LOGIN_SUCCESS ', () => {
      expect(ROUTE_ACTIONS[AUTH_LOGIN_SUCCESS]()).toEqual({
        type: constants.NAVIGATION_PUSH,
        payload: {
          key: constants.ROUTE_ONBOARDING_WELCOME,
        },
      });
    });

    it('ONBOARDING_CHANGE_PROFILE ', () => {
      expect(ROUTE_ACTIONS[ONBOARDING_CHANGE_PROFILE]()).toEqual({
        type: constants.NAVIGATION_POP,
      });
    });
  });
});
