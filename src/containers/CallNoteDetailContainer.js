import { connect } from 'react-redux';
import CallNoteDetail from 'src/views/CallNoteDetail';
import { getCallNote, getCall, getActivity } from 'src/store/helpers';
import { dismissScreen } from 'src/actions/navigation';

const mapStateToProps = (state, { callNoteId }) => {
  const callNote = getCallNote(state, callNoteId);
  const call = getCall(state, callNote.call);
  const activity = callNote.callActivity && getActivity(state, callNote.callActivity);

  return {
    callNote,
    call,
    activity,
  };
};

export { mapStateToProps };
export default connect(mapStateToProps, {
  onBackPress: dismissScreen,
})(CallNoteDetail);
