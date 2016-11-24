import { connect } from 'react-redux';
import CallNoteEvent from 'src/views/CallNoteEvent';
import { chooseCallNote } from 'src/actions/callNote';
import { getCallNote } from 'src/store/helpers';


const mapStateToProps = (state, event) => {
  const callNote = getCallNote(state, event.objectId);

  return {
    event,
    callNote,
  };
};


const propsToActions = {
  onPress: chooseCallNote,
};


export { mapStateToProps };
export default connect(mapStateToProps, propsToActions)(CallNoteEvent);
