import { connect } from 'react-redux';
import CallNoteDetail from 'src/views/CallNoteDetail';
import { getCallNote, getActivity } from 'src/stores/helpers';
import { dismissScreen } from 'src/actions/navigation';

const mapStateToProps = (state, { callNoteId }) => {
  const callNote = getCallNote(state, callNoteId);
  const activity = callNote.callActivity && getActivity(state, callNote.callActivity);

  return {
    callNote,
    activity,
  };
};

export { mapStateToProps };
export default connect(mapStateToProps, {
  onBackPress: dismissScreen,
})(CallNoteDetail);
