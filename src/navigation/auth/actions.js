import * as constants from './constants';
import { pushRoute, staticAction } from 'src/actionHelpers';


export const popAuthRoute = staticAction(constants.AUTH_NAVIGATION_POP);
export const pushAuthRoute = pushRoute(constants.AUTH_NAVIGATION_PUSH);


export const pushLoginRoute = () => pushAuthRoute(constants.AUTH_ROUTE_LOGIN);
export const pushResetPasswordRoute = () => pushAuthRoute(constants.AUTH_ROUTE_RESET_PASSWORD);
export const pushActivateAccountRoute = () => pushAuthRoute(constants.AUTH_ROUTE_ACTIVATE);
