import { connect } from 'react-redux';
import CallCompleted from 'src/views/CallCompleted';
import { createCallNotes } from 'src/actions/callNotes';
import { dismissScreen } from 'src/actions/navigation';


export const mapDispatchToProps = (dispatch, { callId }) => ({
  onDismissPress: () => dispatch(dismissScreen()),
  onAddCallNotesPress: () => dispatch(createCallNotes(callId)),
});


export default connect(null, mapDispatchToProps)(CallCompleted);
