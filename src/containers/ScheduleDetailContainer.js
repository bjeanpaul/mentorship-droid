import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ScheduleDetail from 'src/views/ScheduleDetail';
import { dismissScreen } from 'src/actions/navigation';
import { getScheduledCall, getActivity } from 'src/stores/helpers';

import {
  createScheduledCall, patchScheduledCall, changeScheduledCallActivity,
} from 'src/actions/schedule';


const done = scheduledCallId => ({ callTime }) => scheduledCallId
  ? patchScheduledCall(scheduledCallId, { callTime })
  : createScheduledCall({ callTime });


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

  return {
    activity,
    initialCallTime: callTime,
  };
};


export const mapDispatchToProps = (dispatch, { scheduledCallId }) => bindActionCreators({
  onDismissPress: dismissScreen,
  onDone: done(scheduledCallId),
  onActivityPress: changeScheduledCallActivity,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ScheduleDetail);
