import { omitBy, isUndefined } from 'lodash';
import { connect } from 'react-redux';
import StartCall from 'src/views/StartCall';
import { getScheduledCall, getScheduledCallActivity } from 'src/stores/helpers';
import { startCall } from 'src/actions/calls';
import { dismissScreen } from 'src/actions/navigation';


const mapStateToProps = (state, { scheduledCallId }) => {
  const scheduledCall = getScheduledCall(state, scheduledCallId);
  const activity = getScheduledCallActivity(state, scheduledCallId);

  return omitBy({
    scheduledCall,
    activity,
  }, isUndefined);
};


const propsToActions = {
  onDismissPress: dismissScreen,
  onActivatePress: startCall,
};


export { mapStateToProps };
export default connect(mapStateToProps, propsToActions)(StartCall);
