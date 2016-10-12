import { connect } from 'react-redux';

import { getCall } from 'src/stores/helpers';
import CallNoteStepper from 'src/views/CallNoteStepper';
import steps from 'src/containers/CallNoteStepsContainer';


export const mapStateToProps = (state, { callId }) => ({
  call: getCall(state, callId),
  navigationState: state.callNote.navigation,
  steps,
});


export default connect(mapStateToProps)(CallNoteStepper);
