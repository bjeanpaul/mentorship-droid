import { connect } from 'react-redux';
import ApiError from 'src/views/ApiError';
import { dismissScreen } from 'src/actions/navigation';


export default connect(null, {
  onDismissPress: dismissScreen,
})(ApiError);
