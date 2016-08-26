import { fromPairs } from 'lodash';
import { makePushRoute, popRoute } from 'src/navigation/actions';
import * as constants from 'src/navigation/constants';

import { AUTH_LOGIN_SUCCESS } from 'src/auth/constants';
import { ONBOARDING_CHANGE_PROFILE } from 'src/onboarding/constants';


export default fromPairs([
  [AUTH_LOGIN_SUCCESS, makePushRoute(constants.ROUTE_ONBOARDING_WELCOME)],
  [ONBOARDING_CHANGE_PROFILE, popRoute],
]);
