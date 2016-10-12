import { pick } from 'lodash';
import { connect } from 'react-redux';
import { createCallNote, changeCallNote } from 'src/actions/callNote';
import { getActivity, getCategory } from 'src/stores/helpers';

import {
  Reflections,
  Mood,
  Completed,
  Rating,
  CallQuality,
} from 'src/views/CallNoteSteps';
import Saving from 'src/views/CallNoteSaving';


const callNoteContainer = ({
  component,
  callNoteProps,
  actions = {
    onChangeText: changeCallNote,
  },
}) => connect(
  state => pick(state.callNote.callNote, callNoteProps),
  actions,
)(component);


export const completedMapDispatchToProps = (state, { call }) => {
  const { objective, category } = getActivity(state, call.activity);
  const { color } = getCategory(state, category);

  return {
    completed: state.callNote.callNote.completed,
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


export default {
  Reflections: callNoteContainer({
    component: Reflections,
    callNoteProps: ['reflections'],
  }),

  Mood: callNoteContainer({
    component: Mood,
    callNoteProps: ['mood'],
    actions: {
      onSelectImage: changeCallNote,
    },
  }),

  Completed: connect(completedMapDispatchToProps, {
    onSelectImage: changeCallNote,
  })(Completed),

  Rating: callNoteContainer({
    component: Rating,
    callNoteProps: ['rating'],
  }),

  CallQuality: callNoteContainer({
    component: CallQuality,
    callNoteProps: ['callQuality'],
  }),

  Saving: connect(savingMapStateToProps, {
    save: createCallNote,
  })(Saving),
};
