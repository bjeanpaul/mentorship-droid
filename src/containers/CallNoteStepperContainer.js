import { connect } from 'react-redux';
import CallNoteStepper from 'src/views/CallNoteStepper';


export default connect(state => ({
  navigationState: state.callNote.navigation,
}))(CallNoteStepper);
