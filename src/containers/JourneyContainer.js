import { connect } from 'react-redux';
import { openCall } from 'src/actions/journey';
import Journey from 'src/views/Journey';
import noop from 'lodash';
import { changeNavToScheduledCallsTab } from 'src/actions/navigation';


export default connect(() => ({
  nextScheduledCallDate: void 0, // TODO
}), {
  onNextScheduledCallPress: changeNavToScheduledCallsTab,
  onCallPress: openCall,
  onMessagePress: () => noop, // TODO
  onGetStartedPress: () => noop, // TODO
})(Journey);
