import { unary } from 'lodash';
import * as routes from 'src/constants/routes';
import * as onboarding from 'src/constants/onboarding';


import {
  popCurrent,
  insertAfterCurrent,
  pushList,
  createRoute,
  createStack,
} from 'src/navigationHelpers';


export default (state = createStack([
  createRoute(routes.ROUTE_ONBOARDING_WELCOME),
]), action) => {
  switch (action.type) {
    case onboarding.ONBOARDING_START_PROFILE:
      return pushList(state, routes.ONBOARDING_STEPS.map(unary(createRoute)));

    case onboarding.ONBOARDING_CHOOSE_PROFILE_PICTURE:
      return insertAfterCurrent(state, createRoute(routes.ROUTE_ONBOARDING_CAMERA_ROLL));

    case onboarding.ONBOARDING_UPDATE_PROFILE_PICTURE:
      return popCurrent(state);

    default:
      return state;
  }
};
