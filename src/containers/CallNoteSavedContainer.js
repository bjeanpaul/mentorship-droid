import { connect } from 'react-redux';
import CallNoteSaved from 'src/views/CallNoteSaved';
import { addNextScheduledCall } from 'src/actions/schedule';
import { dismissScreen } from 'src/actions/navigation';
import { getCallNote, getActivity } from 'src/stores/helpers';


const mapStateToProps = (state, { callNoteId }) => {
  const callNote = getCallNote(state, callNoteId);
  const { callActivity } = callNote;
  const activity = callActivity && getActivity(state, callActivity);

  return {
    callNote,
    activity,
  };
};


export {
  mapStateToProps,
};


export default connect(null, {
  onDismissPress: dismissScreen,
  onScheduleNextPress: addNextScheduledCall,
})(CallNoteSaved);
