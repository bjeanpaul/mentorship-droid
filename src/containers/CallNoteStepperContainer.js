import { connect } from 'react-redux';

import { getCall, getActivity } from 'src/stores/helpers';
import CallNoteStepper from 'src/views/CallNoteStepper';
import steps from 'src/containers/CallNoteStepsContainer';


export const mapStateToProps = (state, { callId }) => {
  const call = getCall(state, callId);
  const activity = call.activity && getActivity(state, call.activity);

  return {
    call,
    activity,
    navigationState: state.callNote.navigation,
    steps,
  };
};


export default connect(mapStateToProps)(CallNoteStepper);
