import { connect } from 'react-redux';
import { createCallNoteWithMentor, changeCallNote } from 'src/actions/callNote';
import { stepBack, stepForward } from 'src/actions/callNote';
import { getActivity, getCategory } from 'src/stores/helpers';
import CallNoteSteps from 'src/views/CallNoteSteps';


export const propsToActions = {
  onChange: changeCallNote,
  onBackPress: stepBack,
  onNextPress: stepForward,
  save: createCallNoteWithMentor,
};


export const mapStateToProps = (state, { call }) => {
  let { callNote: { callNote } } = state;
  let activity;
  let category;

  callNote = {
    call: call.id,
    ...callNote,
  };

  if (call.activity) {
    activity = getActivity(state, call.activity);
    category = activity && getCategory(state, activity.category);
  }

  return {
    callNote,
    activity,
    category,
  };
};


export default connect(mapStateToProps, propsToActions)(CallNoteSteps);
