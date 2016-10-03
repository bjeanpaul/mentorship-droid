import { connect } from 'react-redux';
import Journey from 'src/views/Journey';
import { getNextScheduledCall } from 'src/stores/helpers';
import { changeNavToScheduledCallsTab } from 'src/actions/navigation';
import { openCall } from 'src/actions/journey';
import noop from 'lodash';

const mapStateToProps = state => ({
  nextScheduledCallDate: (getNextScheduledCall(state) || 0).callTime,
});

export { mapStateToProps };
export default connect(mapStateToProps, {
  onNextScheduledCallPress: changeNavToScheduledCallsTab,
  onCallPress: openCall,
  onMessagePress: () => noop, // TODO
})(Journey);
