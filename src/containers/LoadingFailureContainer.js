import { connect } from 'react-redux';
import LoadingFailure from 'src/views/LoadingFailure';
import { dismissScreen } from 'src/actions/navigation';


export default connect(null, {
  onDismissPress: dismissScreen,
})(LoadingFailure);
