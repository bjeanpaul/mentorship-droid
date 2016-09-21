import { connect } from 'react-redux';
import { openCall } from 'src/actions/journey';
import Journey from 'src/views/Journey';
import noop from 'lodash';


export default connect(() => ({
  nextScheduledCallDate: void 0, // TODO
}), {
  onNextScheduledCallPress: () => noop,  // TODO
  onCallPress: openCall,
  onMessagePress: () => noop, // TODO
  onGetStartedPress: () => noop, // TODO
})(Journey);
