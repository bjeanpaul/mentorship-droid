import * as constants from './constants';

export const pushAuthRoute = (key) => ({
  type: constants.NAVIGATION_AUTH_PUSH,
  payload: { key },
});

export const popAuthRoute = () => ({
  type: constants.NAVIGATION_AUTH_POP,
});

export const pushLoginRoute = () =>
  pushAuthRoute(constants.ROUTE_AUTH_LOGIN);
export const pushResetPasswordRoute = () =>
  pushAuthRoute(constants.ROUTE_AUTH_RESET_PASSWORD);
export const pushActivateAccountRoute = () =>
  pushAuthRoute(constants.ROUTE_AUTH_ACTIVATE);
