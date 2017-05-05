import { connect } from 'react-redux';
import { createCallNoteWithMentor, changeCallNote } from 'src/actions/callNotes';
import { getActivity, getCategory, getCall } from 'src/store/helpers';
import CallNoteStepsV1 from 'src/views/CallNoteStepsV1';


export const propsToActions = {
  onChange: changeCallNote,
  onDonePress: createCallNoteWithMentor,
};


export const mapStateToProps = (state, { callId }) => {
  const call = getCall(state, callId);
  const { callNote: callNoteState } = state;
  const { navigation: navigationState } = callNoteState;
  let { callNote } = callNoteState;

  callNote = {
    call: call.id,
    ...callNote,
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


export default connect(mapStateToProps, propsToActions)(CallNoteStepsV1);
