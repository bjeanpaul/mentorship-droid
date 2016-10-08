import { pick } from 'lodash';
import { connect } from 'react-redux';
import { changeCallNote } from 'src/actions/callNote';


import {
  Reflections,
} from 'src/views/CallNoteSteps';
import CallNoteStepMood from 'src/views/CallNoteStepMood';


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


export default {
  Reflections: callNoteContainer({
    component: Reflections,
    callNoteProps: ['reflections'],
  }),
  Mood: callNoteContainer({
    component: CallNoteStepMood,
    callNoteProps: ['mood'],
    actions: {
      onSelectImage: changeCallNote,
    },
  }),
};
