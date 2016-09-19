import { fromPairs } from 'lodash';

import {
  EVENT_TYPE_SCHEDULED_CALL_CREATED,
  // EVENT_TYPE_SCHEDULED_CALL_UPDATED,
  // EVENT_TYPE_SCHEDULED_CALL_CANCELLED,
  // EVENT_TYPE_CALL_STARTED,
  // EVENT_TYPE_CALL_ENDED,
  // EVENT_TYPE_MESSAGE_SENT,
  // EVENT_TYPE_MESSAGE_RECEIVED,
  // EVENT_TYPE_ACTIVITIY_CATEGORY_COMPLETED,
  // EVENT_TYPE_CALL_NOTES_CREATED,
} from 'src/constants/events';

import CallScheduledEventContainer from 'src/containers/CallScheduledEventContainer';

export default fromPairs([
  [EVENT_TYPE_SCHEDULED_CALL_CREATED, CallScheduledEventContainer],
]);
