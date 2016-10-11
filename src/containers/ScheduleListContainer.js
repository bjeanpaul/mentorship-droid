import { connect } from 'react-redux';

import ScheduleList from 'src/views/ScheduleList';
import { getScheduledCalls, getActivity } from 'src/stores/helpers';
import { addScheduledCall, openScheduledCall } from 'src/actions/schedule';


export const mapStateToProps = state => ({
  calls: getScheduledCalls(state)
    .map(({ activity, ...call }) => ({
      ...call,
      activity: activity && getActivity(state, activity),
    })),
});


const propsToActions = {
  onAddPress: addScheduledCall,
  onCallChosen: openScheduledCall,
};


export default connect(mapStateToProps, propsToActions)(ScheduleList);
