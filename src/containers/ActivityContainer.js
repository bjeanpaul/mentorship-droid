import { findLast } from 'lodash';
import { connect } from 'react-redux';
import Activity from 'src/views/Activity';

import { openScheduledCall } from 'src/actions/schedule';

import {
  getCategory,
  getActivity,
  getNextScheduledCall,
  getCallsWithCallNotes,
} from 'src/store/helpers';

import {
  scheduleActivityCall,
  viewActivityCallNotes,
  dismissActivityScreen,
} from 'src/actions/activities';


const getLatestCallNote = (state, activityId) => {
  let res = state;
  res = getCallsWithCallNotes(res);
  return findLast(res, ({ call }) => call.activity === activityId);
};


const mapStateToProps = (state, { activityId }) => {
  const activity = getActivity(state, activityId);
  const { category: categoryId } = activity;
  const category = getCategory(state, categoryId);
  const nextScheduledCall = getNextScheduledCall(state, { activity: activityId });
  const latestCallNote = (getLatestCallNote(state, activityId) || 0).callNote;

  return {
    category,
    activity,
    nextScheduledCall,
    latestCallNote,
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
