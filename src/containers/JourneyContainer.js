import { connect } from 'react-redux';
import Journey from 'src/views/Journey';
import noop from 'lodash';


export default connect(() => ({
  nextScheduledCallDate: void 0, // TODO
}), {
  onNextScheduledCallPress: () => noop,  // TODO
  onCallPress: () => noop,  // TODO
  onMessagePress: () => noop, // TODO
  onGetStartedPress: () => noop, // TODO
})(Journey);
