import { pick } from 'lodash';
import { connect } from 'react-redux';
import { changeCallNote } from 'src/actions/callNote';
import {
  Reflections,
} from 'src/views/CallNoteFormSteps';


const callNoteContainer = ({
  component,
  profileProps,
  actions = {
    onChangeText: changeCallNote,
  },
}) => connect(
  state => pick(state.callNote.callNote, profileProps),
  actions,
)(component);


export default {
  Reflections: callNoteContainer({
    component: Reflections,
    profileProps: ['reflections'],
  }),
};
