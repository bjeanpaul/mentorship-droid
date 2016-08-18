
import {
  pushLoginRoute,
  pushResetPasswordRoute,
  pushActivateAccountRoute,
} from 'src/navigation/auth/actions';

import * as constants from 'src/navigation/auth/constants';

describe('navigation/auth/actions', () => {
  it('should push route for login', () => {
    expect(pushLoginRoute()).toEqual({
      type: constants.NAVIGATION_AUTH_PUSH,
      payload: {
        key: constants.ROUTE_AUTH_LOGIN,
      },
    });
  });

  it('should push route for password reset', () => {
    expect(pushResetPasswordRoute()).toEqual({
      type: constants.NAVIGATION_AUTH_PUSH,
      payload: {
        key: constants.ROUTE_AUTH_RESET_PASSWORD,
      },
    });
  });

  it('should push route for login', () => {
    expect(pushActivateAccountRoute()).toEqual({
      type: constants.NAVIGATION_AUTH_PUSH,
      payload: {
        key: constants.ROUTE_AUTH_ACTIVATE,
      },
    });
  });
});
