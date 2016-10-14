import { filter } from 'lodash';
import { connect } from 'react-redux';
import CallNoteList from 'src/views/CallNoteList';
import { getCallNotes } from 'src/stores/helpers';
import { dismissScreen } from 'src/actions/navigation';
import { chooseCallNote } from 'src/actions/callNote';


// TODO handle call notes without activities once we have designs for this
export const mapStateToProps = (state, { activityId }) => ({
  callNotes: filter(getCallNotes(state), { callActivity: activityId }),
});


export const mapDispatchToProps = {
  onRowPress: chooseCallNote,
  onDismissPress: dismissScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(CallNoteList);
