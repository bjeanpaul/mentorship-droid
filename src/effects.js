import { fromPairs } from 'lodash';
import { AUTH_LOGIN_SUCCESS } from 'src/constants/auth';
import { EXISTING_USER_ENTER } from 'src/constants/entry';
import { enter } from 'src/actions/entry';
import { load } from 'src/actions/sync';


export default fromPairs([
  [AUTH_LOGIN_SUCCESS, enter],
  [EXISTING_USER_ENTER, load],
  // TODO add entry for end of onboarding after #91
]);
