import { connect } from 'react-redux';
import Journey from 'src/views/Journey';
import { getNextScheduledCall } from 'src/stores/helpers';
import { openNextScheduledCall } from 'src/actions/schedule';
import { openCall } from 'src/actions/calls';
import noop from 'lodash';


const mapStateToProps = state => ({
  nextScheduledCallDate: (getNextScheduledCall(state) || 0).callTime,
});


export { mapStateToProps };

export default connect(mapStateToProps, {
  onNextScheduledCallPress: openNextScheduledCall,
  onCallPress: openCall,
  onMessagePress: () => noop, // TODO
})(Journey);
