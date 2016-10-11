import { connect } from 'react-redux';
import CallCompleted from 'src/views/CallCompleted';
import { openCreateCallNote } from 'src/actions/callNote';
import { dismissScreen } from 'src/actions/navigation';


export const mapDispatchToProps = (dispatch, { callId, activityId }) => ({
  onDismissPress: () => dispatch(dismissScreen()),
  onAddCallNotesPress: () => dispatch(openCreateCallNote({
    callId,
    activityId,
  })),
});


export default connect(null, mapDispatchToProps)(CallCompleted);
