import { fromPairs } from 'lodash';
import { AUTH_LOGIN_SUCCESS } from 'src/constants/auth';
import { enter } from 'src/actions/entry';


export default fromPairs([
  [AUTH_LOGIN_SUCCESS, enter],
  // TODO add entry for end of onboarding after #91
]);
