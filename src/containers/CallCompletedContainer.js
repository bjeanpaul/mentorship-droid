import { connect } from 'react-redux';
import CallCompleted from 'src/views/CallCompleted';
import { createCallNotes } from 'src/actions/callNotes';


export const mapDispatchToProps = (dispatch, { callId }) => ({
  onAddCallNotesPressed: () => dispatch(createCallNotes(callId)),
});


export default connect(null, mapDispatchToProps)(CallCompleted);
