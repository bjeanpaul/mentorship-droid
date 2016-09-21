import { connect } from 'react-redux';
import CallCompleted from 'src/views/CallCompleted';
import { createCallNotes } from 'src/actions/callNotes';


export default connect(null, {
  onAddCallNotesPressed: createCallNotes,
})(CallCompleted);
