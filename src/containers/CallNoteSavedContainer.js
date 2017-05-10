import { connect } from 'react-redux';
import CallNoteSaved from 'src/views/CallNoteSaved';
import { addNextScheduledCall } from 'src/actions/schedule';
import { dismissScreen } from 'src/actions/navigation';
import { getCallNote, getActivity, getCallNoteMetadata } from 'src/store/helpers';


const mapStateToProps = (state, { callNoteId }) => {
  const callNote = getCallNote(state, callNoteId);
  const { callActivity } = callNote;
  const activity = callActivity && getActivity(state, callActivity);
// TODO implement
  const metadata = getCallNoteMetadata(state);

  return {
    callNote,
    activity,
    metadata,
  };
};


export {
  mapStateToProps,
};


export default connect(mapStateToProps, {
  onDismissPress: dismissScreen,
  onScheduleNextPress: addNextScheduledCall,
})(CallNoteSaved);
