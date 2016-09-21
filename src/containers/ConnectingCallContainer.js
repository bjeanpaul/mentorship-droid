import { connect } from 'react-redux';
import ConnectingCall from 'src/views/ConnectingCall';
import { dismissScreen } from 'src/actions/navigation';


const propsToActions = {
  onDismissPress: dismissScreen,
};


export default connect(null, propsToActions)(ConnectingCall);
