import * as constants from 'src/constants/navigation';


export const popRoute = () => ({
  type: constants.NAVIGATION_POP,
});

export const makePushRoute = (key) => () => ({
  type: constants.NAVIGATION_PUSH,
  payload: { key },
});

export const pushRoute = (key) => makePushRoute(key)();


export const pushLoginRoute = makePushRoute(constants.ROUTE_AUTH_LOGIN);
export const pushActivationRoute = makePushRoute(constants.ROUTE_AUTH_ACTIVATION);
export const pushResetPasswordRoute = makePushRoute(constants.ROUTE_AUTH_RESET_PASSWORD);


export const pushWelcomeRoute = makePushRoute(constants.ROUTE_ONBOARDING_WELCOME);
export const pushProfilePictureRoute = makePushRoute(constants.ROUTE_ONBOARDING_PROFILE_PICTURE);
export const pushCameraRollRoute = makePushRoute(constants.ROUTE_ONBOARDING_CAMERA_ROLL);
export const pushOnboardingOccupationRoute = makePushRoute(constants.ROUTE_ONBOARDING_OCCUPATION);
export const pushOnboardingMotivation = makePushRoute(constants.ROUTE_ONBOARDING_MOTIVATION);
export const pushOnboardingInspiration = makePushRoute(constants.ROUTE_ONBOARDING_INSPIRATION);
export const pushOnboardingThreeWords = makePushRoute(constants.ROUTE_ONBOARDING_THREE_WORDS);
export const pushOnboardingSkills = makePushRoute(constants.ROUTE_ONBOARDING_SKILLS);
