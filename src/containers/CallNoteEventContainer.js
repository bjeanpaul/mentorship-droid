import { connect } from 'react-redux';
import CallNoteEvent from 'src/views/CallNoteEvent';
import { getCallNote } from 'src/stores/helpers';


const mapStateToProps = (state, event) => {
  const callNote = getCallNote(state, event.objectId);

  return {
    event,
    callNote,
  };
};


export { mapStateToProps };
export default connect(mapStateToProps)(CallNoteEvent);
