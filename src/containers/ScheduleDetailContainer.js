import { omitBy, isUndefined, reject, map } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ScheduleDetail from 'src/views/ScheduleDetail';
import { dismissScreen } from 'src/actions/navigation';
import { getScheduledCall, getScheduledCalls, getActivity } from 'src/stores/helpers';

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
  scheduledCallId,
  activityId,
  date,
}) => {
  const {
    callTime,
    activity: callActivityId,
  } = scheduledCallId && getScheduledCall(state, scheduledCallId) || {};

  let activity;

  // null means the activity has been unset, undefined means no activity has
  // been given
  if (activityId === null) {
    activity = null;
  } else if (activityId) {
    activity = getActivity(state, activityId);
  } else if (callActivityId) {
    activity = getActivity(state, callActivityId);
  }

  const calls = reject(getScheduledCalls(state), { id: scheduledCallId });

  return {
    activity,
    callTimes: map(calls, 'callTime'),
    initialDate: date,
    initialCallTime: callTime,
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
