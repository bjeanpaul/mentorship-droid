import { connect } from 'react-redux';
import CallScheduleFailure from 'src/views/CallScheduleFailure';
import { dismissScreen } from 'src/actions/navigation';


export default connect(null, {
  onDismissPress: dismissScreen,
})(CallScheduleFailure);
