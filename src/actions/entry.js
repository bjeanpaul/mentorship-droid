import { staticAction } from 'src/actionHelpers';
import { profileIsComplete } from 'src/api';
import * as constants from 'src/constants/entry';

export const enterNewUser = staticAction(constants.NEW_USER_ENTER);
export const enterExistingUser = staticAction(constants.EXISTING_USER_ENTER);

export const enter = () => (dispatch, { profile }) => {

  console.log(profile);

  return (
  profileIsComplete(profile)
    ? dispatch(enterExistingUser())
    : dispatch(enterNewUser()));
}
