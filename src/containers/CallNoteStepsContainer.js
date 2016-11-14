import { pick } from 'lodash';
import { connect } from 'react-redux';
import { createCallNoteWithMentor, changeCallNote } from 'src/actions/callNote';
import { stepBack, stepForward } from 'src/actions/callNote';
import { getActivity, getCategory } from 'src/stores/helpers';
import * as steps from 'src/views/CallNoteSteps';
import SavingStep from 'src/views/CallNoteSaving';


export const propsToActions = {
  onChangeText: changeCallNote,
  onBackPress: stepBack,
  onNextPress: stepForward,
};


export const mapStateToProps = (...propNames) => state => (
  pick(state.callNote.callNote, propNames));


export const completedMapDispatchToProps = (state, { call }) => {
  const { objective, category } = getActivity(state, call.activity);
  const { color } = getCategory(state, category);

  return {
    objectiveAchieved: state.callNote.callNote.objectiveAchieved,
    objective,
    color,
  };
};


export const savingMapStateToProps = (state, { call }) => ({
  callNote: {
    call: call.id,
    ...state.callNote.callNote,
  },
});


export const Reflections = connect(
  mapStateToProps('reflection'),
  propsToActions
)(steps.Reflections);


export const Mood = connect(mapStateToProps('menteeState'), {
  onSelectImage: changeCallNote,
  ...propsToActions,
})(steps.Mood);


export const Completed = connect(
  completedMapDispatchToProps,
  propsToActions
)(steps.Completed);


export const Rating = connect(
  mapStateToProps('activityHelpful'),
  propsToActions
)(steps.Rating);


export const CallQuality = connect(
  mapStateToProps('callQuality'),
  propsToActions
)(steps.CallQuality);


export const Saving = connect(savingMapStateToProps, {
  save: createCallNoteWithMentor,
})(SavingStep);
