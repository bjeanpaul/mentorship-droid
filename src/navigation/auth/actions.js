import {
  NAVIGATION_AUTH_PUSH,
  NAVIGATION_AUTH_POP,
  ROUTE_AUTH_LOGIN,
  ROUTE_AUTH_ACTIVATE,
  ROUTE_AUTH_RESET_PASSWORD,
} from './constants';


const pushAuthRoute = (key) => ({
  type: NAVIGATION_AUTH_PUSH,
  payload: { key },
});

export const popAuthRoute = () => ({
  type: NAVIGATION_AUTH_POP,
});

export const pushLoginRoute = () =>
  pushAuthRoute(ROUTE_AUTH_LOGIN);
export const pushResetPasswordRoute = () =>
  pushAuthRoute(ROUTE_AUTH_RESET_PASSWORD);
export const pushActivateAccountRoute = () =>
  pushAuthRoute(ROUTE_AUTH_ACTIVATE);
