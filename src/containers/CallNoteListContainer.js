import { isUndefined, filter } from 'lodash';
import { connect } from 'react-redux';
import CallNoteList from 'src/views/CallNoteList';
import { getCallNotes } from 'src/store/helpers';
import { dismissScreen } from 'src/actions/navigation';
import { chooseCallNote } from 'src/actions/callNote';


// TODO handle call notes without activities once we have designs for this
export const mapStateToProps = (state, { activityId } = {}) => {
  let callNotes = getCallNotes(state);
  if (!isUndefined(activityId)) callNotes = filter(callNotes, { callActivity: activityId });
  return { callNotes };
};


export const mapDispatchToProps = {
  onRowPress: chooseCallNote,
  onDismissPress: dismissScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(CallNoteList);
