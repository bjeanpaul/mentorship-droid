import { connect } from 'react-redux';
import NetworkError from 'src/views/NetworkError';
import { dismissScreen } from 'src/actions/navigation';


export default connect(null, {
  onDismissPress: dismissScreen,
})(NetworkError);
