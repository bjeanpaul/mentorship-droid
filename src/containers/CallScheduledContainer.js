import { connect } from 'react-redux';
import CallScheduled from 'src/views/CallScheduled';
import { dismissScreen } from 'src/actions/navigation';


export default connect(null, {
  onDismissPress: dismissScreen,
})(CallScheduled);
