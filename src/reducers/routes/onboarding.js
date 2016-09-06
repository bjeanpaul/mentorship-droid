import * as routes from 'src/constants/routes';
import * as onboarding from 'src/constants/onboarding';


import {
  popCurrent,
  insertAfterCurrent,
  createRoute,
  createStack,
} from 'src/navigationHelpers';


export default (state = createStack([
  createRoute(routes.ROUTE_ONBOARDING),
]), action) => {
  switch (action.type) {
    case onboarding.ONBOARDING_CHOOSE_PROFILE_PICTURE:
      return insertAfterCurrent(state, createRoute(routes.ROUTE_ONBOARDING_CAMERA_ROLL));

    case onboarding.ONBOARDING_UPDATE_PROFILE_PICTURE:
      return popCurrent(state);

    default:
      return state;
  }
};
