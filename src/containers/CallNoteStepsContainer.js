import { pick } from 'lodash';
import { connect } from 'react-redux';
import { changeCallNote } from 'src/actions/callNote';
import { getActivity } from 'src/stores/helpers';

import {
  Reflections,
  Mood,
  Completed,
} from 'src/views/CallNoteSteps';


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


const completedMapDispatchToProps = (state, { activityId }) => {

  const { objective } = getActivity(state, activityId);
  return {
    completed: state.callNote.callNote.completed,
    objective,
  };
};

export {
  completedMapDispatchToProps,
};
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
  Completed: connect(
    completedMapDispatchToProps, {
      onSelectImage: changeCallNote,
    }
  )
  (Completed),

};
