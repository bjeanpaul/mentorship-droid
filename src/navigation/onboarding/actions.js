import * as constants from './constants';
import { pushRoute, staticAction } from 'src/actionHelpers';


export const popOnboardingRoute = staticAction(constants.ONBOARDING_NAVIGATION_POP);
export const pushOnboardingRoute = pushRoute(constants.ONBOARDING_NAVIGATION_PUSH);


export const pushHelloRoute = () =>
  pushOnboardingRoute(constants.ONBOARDING_ROUTE_HELLO);
export const pushProfilePictureRoute = () =>
  pushOnboardingRoute(constants.ONBOARDING_ROUTE_PROFILE_PICTURE);
export const pushCameraRollRoute = () =>
    pushOnboardingRoute(constants.ONBOARDING_ROUTE_CAMERA_ROLL);
