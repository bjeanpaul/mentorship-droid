import { constant, first } from 'lodash';
import { connect } from 'react-redux';

import { NAV_TAB_CHAT } from 'src/constants/navigation';
import { START_CALL_RANGE_START, START_CALL_RANGE_END } from 'src/constants/schedule';

import Journey from 'src/views/Journey';
import { getNextScheduledCall, getScheduledCallsBetween } from 'src/store/helpers';
import { openScheduledCall, addScheduledCall, startScheduledCall } from 'src/actions/schedule';
import { openProfileSettings } from 'src/actions/profile';
import { openCall } from 'src/actions/calls';
import { changeNavTab } from 'src/actions/navigation';


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
  onChatPress: constant(changeNavTab(NAV_TAB_CHAT)),
  onProfilePress: openProfileSettings,
  onScheduleCallPress: () => addScheduledCall(),
  onViewScheduledCallPress: openScheduledCall,
  onStartScheduledCallPress: startScheduledCall,
})(Journey);
