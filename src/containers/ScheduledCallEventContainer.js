import { connect } from 'react-redux';
import ScheduledCallEvent from 'src/views/ScheduledCallEvent';
import { getScheduledCall, getScheduledCallActivity } from 'src/store/helpers';


const mapStateToProps = (state, {
  objectId: scheduledCallId,
}) => {
  const scheduledCall = getScheduledCall(state, scheduledCallId);
  const activity = getScheduledCallActivity(state, scheduledCallId);

  return {
    activity,
    scheduledCall,
  };
};


export { mapStateToProps };
export default connect(mapStateToProps)(ScheduledCallEvent);
