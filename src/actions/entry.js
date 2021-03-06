import { staticAction } from 'src/actionHelpers';
import { profileIsComplete } from 'src/api';
import * as constants from 'src/constants/entry';


export const enterExistingUser = staticAction(constants.EXISTING_USER_ENTER);
export const enterNewUser = staticAction(constants.NEW_USER_ENTER);


export const enter = () => (dispatch, { profile }) =>
  profileIsComplete(profile)
    ? dispatch(enterExistingUser())
    : dispatch(enterNewUser());
