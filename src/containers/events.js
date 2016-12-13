import { fromPairs } from 'lodash';
import * as constants from 'src/constants/events';


import ScheduledCallEventContainer from 'src/containers/ScheduledCallEventContainer';
import CallNoteEventContainer from 'src/containers/CallNoteEventContainer';
import MilestoneEventContainer from 'src/containers/MilestoneEventContainer';
import MessageEventContainer from 'src/containers/MessageEventContainer';


export default fromPairs([
  [constants.EVENT_TYPE_CALL_NOTES_CREATED, CallNoteEventContainer],
  [constants.EVENT_TYPE_SCHEDULED_CALL_CREATED, ScheduledCallEventContainer],
  [constants.EVENT_TYPE_ACTIVITIY_CATEGORY_COMPLETED, MilestoneEventContainer],
  [constants.EVENT_TYPE_MESSAGE_RECEIVED, MessageEventContainer],
]);
