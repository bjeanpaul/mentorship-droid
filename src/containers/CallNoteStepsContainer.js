import { connect } from 'react-redux';
import { getActivity, getCategory, getCall } from 'src/store/helpers';
import CallNoteSteps from 'src/views/CallNoteSteps';

import {
  createCallNoteWithMentor,
  changeCallNote,
  v2StepNext,
  v2StepBack,
  overrideCallNoteActivity,
} from 'src/actions/callNotes';

import { dismissScreen } from 'src/actions/navigation';

export const propsToActions = {
  onChange: changeCallNote,
  onDonePress: createCallNoteWithMentor,

  // Call notes v1 uses Stepper component, which provides the steps with its
  // own next and back callbacks, so these are only needed for v2.
  onNextPress: v2StepNext,
  onBackPress: v2StepBack,
  onDismissPress: dismissScreen,
  onActivityDifferentSelect: overrideCallNoteActivity,
};


export const mapStateToProps = (state, { callId }) => {
  const call = getCall(state, callId);
  const { callNote: callNoteState } = state;
  const { metadata, steps } = callNoteState;
  let { callNote } = callNoteState;

  callNote = {
    call: call.id,
    ...callNote,
  };

  const activityId = metadata.overrideActivityId || call.activity;
  let activity;
  let category;

  if (activityId) {
    activity = getActivity(state, activityId);
    category = activity && getCategory(state, activity.category);
  }

  return {
    callNote,
    activity,
    category,
    metadata,
    steps,
  };
};


export default connect(mapStateToProps, propsToActions)(CallNoteSteps);
