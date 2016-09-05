import { fromPairs } from 'lodash';
import { AUTH_LOGIN_SUCCESS } from 'src/constants/auth';
import { EXISTING_USER_ENTER } from 'src/constants/entry';
import { ONBOARDING_UPDATE_IMAGE_SUCCESS } from 'src/constants/onboarding';
import { enter } from 'src/actions/entry';
import { load } from 'src/actions/sync';


export default fromPairs([
  [AUTH_LOGIN_SUCCESS, enter],
  [EXISTING_USER_ENTER, load],
  [ONBOARDING_UPDATE_IMAGE_SUCCESS, enter],
]);
