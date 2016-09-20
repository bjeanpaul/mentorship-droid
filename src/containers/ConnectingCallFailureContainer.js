import { connect } from 'react-redux';
import ConnectingCallFailure from 'src/views/ConnectingCallFailure';
import { dismissScreen } from 'src/actions/navigation';


export default connect(null, {
  onDismissPress: dismissScreen,
})(ConnectingCallFailure);
