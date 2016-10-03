import { connect } from 'react-redux';
import NotYetImplemented from 'src/views/CallScheduleFailure';
import { dismissScreen } from 'src/actions/navigation';


export default connect(null, {
  onDismissPress: dismissScreen,
})(NotYetImplemented);
