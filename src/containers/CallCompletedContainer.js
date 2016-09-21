import { connect } from 'react-redux';
import CallCompleted from 'src/views/CallCompleted';
import { newCallNotes } from 'src/actions/callNotes';


export default connect(null, {
  onAddCallNotesPressed: newCallNotes,
})(CallCompleted);
