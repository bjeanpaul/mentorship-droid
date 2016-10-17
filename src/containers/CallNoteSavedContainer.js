import { connect } from 'react-redux';
import CallNoteSaved from 'src/views/CallNoteSaved';
import { dismissScreen } from 'src/actions/navigation';


export default connect(null, {
  onDismissPress: dismissScreen,
})(CallNoteSaved);
