import { fromPairs } from 'lodash';
import {
  EVENT_TYPE_CALL_NOTES_CREATED,
  EVENT_TYPE_SCHEDULED_CALL_CREATED,
  EVENT_TYPE_ACTIVITIY_CATEGORY_COMPLETED,
} from 'src/constants/events';


import ScheduledCallEventContainer from 'src/containers/ScheduledCallEventContainer';
import MilestoneEventContainer from 'src/containers/MilestoneEventContainer';
import CallNoteEventContainer from 'src/containers/CallNoteEventContainer';


export default fromPairs([
  [EVENT_TYPE_CALL_NOTES_CREATED, CallNoteEventContainer],
  [EVENT_TYPE_SCHEDULED_CALL_CREATED, ScheduledCallEventContainer],
  [EVENT_TYPE_ACTIVITIY_CATEGORY_COMPLETED, MilestoneEventContainer],
]);
