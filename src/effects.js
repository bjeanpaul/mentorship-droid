import { fromPairs } from 'lodash';
import { AUTH_LOGIN_SUCCESS } from 'src/constants/auth';
import { EXISTING_USER_ENTER } from 'src/constants/entry';
import { ONBOARDING_SETUP_PROFILE_SUCCESS } from 'src/constants/onboarding';
import { enter } from 'src/actions/entry';
import { load } from 'src/actions/sync';
import { sequence } from 'src/actionHelpers';
import { setupNotifications } from 'src/actions/notifications';
import { EVENT_POLL_TICK } from 'src/constants/events';
import { CALL_NOTE_CREATE_SUCCESS } from 'src/constants/callNotes';

import { SCHEDULED_CALL_CREATE_SUCCESS } from 'src/constants/schedule';
import { listRecentEvents, startEventPolling } from 'src/actions/events';


export default fromPairs([
  [AUTH_LOGIN_SUCCESS, sequence([enter, setupNotifications, startEventPolling])],
  [EXISTING_USER_ENTER, load],
  [ONBOARDING_SETUP_PROFILE_SUCCESS, load],
  [EVENT_POLL_TICK, listRecentEvents],
  [CALL_NOTE_CREATE_SUCCESS, listRecentEvents],
  [SCHEDULED_CALL_CREATE_SUCCESS, listRecentEvents],
]);
