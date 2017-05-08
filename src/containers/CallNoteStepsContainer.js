import { connect } from 'react-redux';
import { createCallNoteWithMentor, changeCallNote } from 'src/actions/callNotes';
import { getActivity, getCategory, getCall } from 'src/store/helpers';
import CallNoteSteps from 'src/views/CallNoteSteps';
import { dismissScreen } from 'src/actions/navigation';

export const propsToActions = {
  onChange: changeCallNote,
  onDonePress: createCallNoteWithMentor,
  onDismissPress: dismissScreen,
};


export const mapStateToProps = (state, { callId }) => {
  const call = getCall(state, callId);
  const { callNote: callNoteState } = state;
  const navigationState = callNoteState.navigation;

  const callNote = {
    call: call.id,
    ...callNoteState.callNote,
  };

  let activity;
  let category;

  if (call.activity) {
    activity = getActivity(state, call.activity);
    category = activity && getCategory(state, activity.category);
  }

  return {
    callNote,
    activity,
    category,
    navigationState,
  };
};


export default connect(mapStateToProps, propsToActions)(CallNoteSteps);
