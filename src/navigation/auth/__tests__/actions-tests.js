
import {
  pushLoginRoute,
  pushResetPasswordRoute,
  pushActivateAccountRoute,
} from 'src/navigation/auth/actions';

import * as constants from 'src/navigation/auth/constants';

describe('navigation/auth/actions', () => {
  it('should push route for login', () => {
    expect(pushLoginRoute()).toEqual({
      type: constants.AUTH_NAVIGATION_PUSH,
      payload: {
        key: constants.AUTH_ROUTE_LOGIN,
      },
    });
  });

  it('should push route for password reset', () => {
    expect(pushResetPasswordRoute()).toEqual({
      type: constants.AUTH_NAVIGATION_PUSH,
      payload: {
        key: constants.AUTH_ROUTE_RESET_PASSWORD,
      },
    });
  });

  it('should push route for login', () => {
    expect(pushActivateAccountRoute()).toEqual({
      type: constants.AUTH_NAVIGATION_PUSH,
      payload: {
        key: constants.AUTH_ROUTE_ACTIVATE,
      },
    });
  });
});
