import { connect } from 'react-redux';
import CallNoteList from 'src/views/CallNoteList';
import { getActivityCallNotes } from 'src/stores/helpers';
import { noop } from 'lodash';


export const mapStateToProps = (state, { activityId }) => ({
  callNotes: getActivityCallNotes(state, activityId),
});


export const mapDispatchToProps = {
  onRowPress: () => noop, // TODO
  onDismissPress: () => noop, // TODO
};

export default connect(mapStateToProps, mapDispatchToProps)(CallNoteList);
