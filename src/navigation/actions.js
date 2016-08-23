import * as constants from './constants';


export const replaceRoute = (key) => () => ({
  type: constants.NAVIGATION_REPLACE,
  payload: { key },
});

export const popRoute = () => ({
  type: constants.NAVIGATION_POP,
});

export const pushRoute = (key) => () => ({
  type: constants.NAVIGATION_PUSH,
  payload: { key },
});


export const pushLoginRoute = pushRoute(constants.ROUTE_AUTH_LOGIN);
export const pushActivationRoute = pushRoute(constants.ROUTE_AUTH_ACTIVATION);
export const pushResetPasswordRoute = pushRoute(constants.ROUTE_AUTH_RESET_PASSWORD);

export const showWelcomeRoute = pushRoute(constants.ROUTE_ONBOARDING_WELCOME);
export const pushProfilePictureRoute = pushRoute(constants.ROUTE_ONBOARDING_PROFILE_PICTURE);
