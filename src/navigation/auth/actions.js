import * as constants from './constants';

export const pushAuthRoute = (key) => ({
  type: constants.AUTH_NAVIGATION_PUSH,
  payload: { key },
});

export const popAuthRoute = () => ({
  type: constants.AUTH_NAVIGATION_POP,
});

export const pushLoginRoute = () =>
  pushAuthRoute(constants.AUTH_ROUTE_LOGIN);
export const pushResetPasswordRoute = () =>
  pushAuthRoute(constants.AUTH_ROUTE_RESET_PASSWORD);
export const pushActivateAccountRoute = () =>
  pushAuthRoute(constants.AUTH_ROUTE_ACTIVATE);
