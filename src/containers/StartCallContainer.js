import { bindActionCreators } from 'redux';
import { omitBy, isUndefined } from 'lodash';
import { connect } from 'react-redux';
import StartCall from 'src/views/StartCall';
import { getScheduledCall, getScheduledCallActivity } from 'src/stores/helpers';
import { createCall } from 'src/actions/calls';
import { dismissScreen } from 'src/actions/navigation';


export const mapStateToProps = (state, { scheduledCallId }) => {
  const scheduledCall = getScheduledCall(state, scheduledCallId);
  const activity = getScheduledCallActivity(state, scheduledCallId);

  return omitBy({
    scheduledCall,
    activity,
  }, isUndefined);
};


export const mapDispatchToProps = dispatch => bindActionCreators({
  onDismissPress: dismissScreen,
  onActivatePress: activity => createCall(omitBy({ activity }, isUndefined)),
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(StartCall);
