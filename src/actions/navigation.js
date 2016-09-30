import { fromPairs } from 'lodash';
import { staticAction } from 'src/actionHelpers';
import * as constants from 'src/constants/navigation';

export const navigateBack = staticAction(constants.NAVIGATE_BACK_REQUEST);
export const navigateForward = staticAction(constants.NAVIGATE_FORWARD_REQUEST);
export const dismissScreen = staticAction(constants.SCREEN_DISMISS);


const tabToTabEntered = fromPairs([
  [constants.NAV_TAB_JOURNEY, constants.NAV_TAB_JOURNEY_ENTERED],
]);

export const changeNavTab = tab => ({
  type: constants.NAV_TAB_CHANGE,
  payload: { tab },
});

export const navTabEntered = type => ({
  type,
});
