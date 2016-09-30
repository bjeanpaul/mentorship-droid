import { omitBy, isUndefined, reject, map } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ScheduleDetail from 'src/views/ScheduleDetail';
import { dismissScreen } from 'src/actions/navigation';
import { getScheduledCall, getScheduledCalls, getActivity } from 'src/stores/helpers';

import {
  createScheduledCall, patchScheduledCall, changeScheduledCallActivity,
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
}) => {
  const {
    callTime,
    activity: callActivityId,
  } = scheduledCallId && getScheduledCall(state, scheduledCallId) || {};

  let activity;

  if (activityId) {
    activity = getActivity(state, activityId);
  } else if (callActivityId) {
    activity = getActivity(state, callActivityId);
  }

  const calls = reject(getScheduledCalls(state), { id: scheduledCallId });

  return {
    activity,
    callTimes: map(calls, 'callTime'),
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
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ScheduleDetail);
