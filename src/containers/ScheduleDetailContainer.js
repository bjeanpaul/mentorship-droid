import { omitBy, isUndefined, reject, map } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ScheduleDetail from 'src/views/ScheduleDetail';
import { dismissScreen } from 'src/actions/navigation';
import { getScheduledCall, getScheduledCalls, getActivity } from 'src/store/helpers';

import {
  createScheduledCall,
  patchScheduledCall,
  changeScheduledCallActivity,
  removeScheduledCallActivity,
} from 'src/actions/schedule';


const done = (scheduledCallId, activityId) => ({ callTime }) => {
  const d = omitBy({
    callTime,
    activity: activityId,
  }, isUndefined);

  return scheduledCallId
    ? patchScheduledCall(scheduledCallId, d)
    : createScheduledCall(d);
};


export const mapStateToProps = (state, {
  date,
  time,
  callTime,
  activityId,
  scheduledCallId,
}) => {
  const {
    callTime: scheduledCallTime,
    activity: scheduledActivityId,
  } = scheduledCallId && getScheduledCall(state, scheduledCallId) || {};

  let activity;

  // null means the activity has been unset, undefined means no activity has
  // been given
  if (activityId === null) {
    activity = null;
  } else if (activityId) {
    activity = getActivity(state, activityId);
  } else if (scheduledActivityId) {
    activity = getActivity(state, scheduledActivityId);
  }

  const calls = reject(getScheduledCalls(state), { id: scheduledCallId });

  return {
    activity,
    callTimes: map(calls, 'callTime'),
    initialDate: date,
    initialTime: time,
    initialCallTime: callTime || scheduledCallTime,
  };
};


export const mapDispatchToProps = (dispatch, {
  scheduledCallId,
  activityId,
}) => bindActionCreators({
  onDismissPress: dismissScreen,
  onDone: done(scheduledCallId, activityId),
  onActivityPress: changeScheduledCallActivity,
  onActivityRemovePress: removeScheduledCallActivity,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ScheduleDetail);
