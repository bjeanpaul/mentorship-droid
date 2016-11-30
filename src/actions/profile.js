import * as constants from 'src/constants/profile';
import { staticAction } from 'src/actionHelpers';


const openProfileSettings = staticAction(constants.PROFILE_SETTINGS_OPEN);


export {
  openProfileSettings,
};
