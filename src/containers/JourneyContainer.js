import { first } from 'lodash';
import { connect } from 'react-redux';
import { START_CALL_RANGE_START, START_CALL_RANGE_END } from 'src/constants/schedule';
import Journey from 'src/views/Journey';
import { getNextScheduledCall, getScheduledCallsBetween } from 'src/store/helpers';
import { openScheduledCall, addScheduledCall, startScheduledCall } from 'src/actions/schedule';
import { openProfileSettings } from 'src/actions/profile';
import { openCall } from 'src/actions/calls';


const mapStateToProps = state => {
  const [start, end] = [START_CALL_RANGE_START, START_CALL_RANGE_END];
  const scheduledCall = first(getScheduledCallsBetween(state, start, end));

  return scheduledCall
    ? {
      scheduledCall,
      shouldStartCall: true,
    }
    : {
      scheduledCall: getNextScheduledCall(state),
      shouldStartCall: false,
    };
};


export { mapStateToProps };

export default connect(mapStateToProps, {
  onCallPress: openCall,
  onProfilePress: openProfileSettings,
  onScheduleCallPress: () => addScheduledCall(),
  onViewScheduledCallPress: openScheduledCall,
  onStartScheduledCallPress: startScheduledCall,
})(Journey);
