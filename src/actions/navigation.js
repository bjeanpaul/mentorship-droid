import { staticAction } from 'src/actionHelpers';
import * as constants from 'src/constants/navigation';


export const dismissScreen = staticAction(constants.SCREEN_DISMISS);


export const changeNavTab = tab => ({
  type: constants.NAV_TAB_CHANGE,
  payload: { tab },
});
