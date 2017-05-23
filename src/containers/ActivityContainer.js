import { findLast } from 'lodash';
import { connect } from 'react-redux';
import Activity from 'src/views/Activity';

import { openScheduledCall } from 'src/actions/schedule';

import {
  getCategory,
  getActivity,
  getNextScheduledCall,
  getCalls,
} from 'src/store/helpers';

import {
  scheduleActivityCall,
  viewActivityCallNotes,
  dismissActivityScreen,
} from 'src/actions/activities';


const mapStateToProps = (state, { activityId }) => {
  const activity = getActivity(state, activityId);
  const { category: categoryId } = activity;
  const category = getCategory(state, categoryId);
  const nextScheduledCall = getNextScheduledCall(state, { activity: activityId });
  const calls = getCalls(state);
  const latestCall = findLast(calls, call => call.activity === activityId);

  return {
    category,
    activity,
    nextScheduledCall,
    latestCall,
  };
};


const propsToActions = {
  // TODO
  onBackPress: dismissActivityScreen,
  onSchedulePress: scheduleActivityCall,
  onReschedulePress: openScheduledCall,
  onViewCallNotesPress: viewActivityCallNotes,
};


export { mapStateToProps };
export default connect(mapStateToProps, propsToActions)(Activity);
