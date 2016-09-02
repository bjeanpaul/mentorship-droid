import { staticAction } from 'src/actionHelpers';
import * as constants from 'src/constants/navigation';


export const navigateBack = staticAction(constants.NAVIGATE_BACK_REQUEST);
export const navigateForward = staticAction(constants.NAVIGATE_FORWARD_REQUEST);
export const dismissScreen = staticAction(constants.SCREEN_DISMISS);
