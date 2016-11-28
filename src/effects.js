import { fromPairs } from 'lodash';
import { AUTH_LOGIN_SUCCESS } from 'src/constants/auth';
import { EXISTING_USER_ENTER } from 'src/constants/entry';
import { ONBOARDING_SETUP_PROFILE_SUCCESS } from 'src/constants/onboarding';
import { enter } from 'src/actions/entry';
import { load } from 'src/actions/sync';
import { sequence } from 'src/actionHelpers';
import { setupNotifications } from 'src/actions/notifications';

import { SCHEDULED_CALL_CREATE_SUCCESS } from 'src/constants/schedule';
import { NAV_TAB_JOURNEY } from 'src/constants/navigation';
import { listEvents } from 'src/actions/events';


export default fromPairs([
  [AUTH_LOGIN_SUCCESS, sequence([enter, setupNotifications])],
  [EXISTING_USER_ENTER, load],
  [ONBOARDING_SETUP_PROFILE_SUCCESS, load],
  [NAV_TAB_JOURNEY, listEvents],
  [SCHEDULED_CALL_CREATE_SUCCESS, listEvents],
]);
