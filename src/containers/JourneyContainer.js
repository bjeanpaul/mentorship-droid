import { connect } from 'react-redux';
import { openCall } from 'src/actions/journey';
import Journey from 'src/views/Journey';
import noop from 'lodash';
import { changeNavToScheduledCallsTab } from 'src/actions/navigation';
import { getNextScheduledCall } from 'src/stores/helpers';


export default connect(state => ({
  nextScheduledCallDate: getNextScheduledCall(state),
}), {
  onNextScheduledCallPress: changeNavToScheduledCallsTab,
  onCallPress: openCall,
  onMessagePress: () => noop, // TODO
  onGetStartedPress: () => noop, // TODO
})(Journey);
