import { connect } from 'react-redux';
import CallNoteDetail from 'src/views/CallNoteDetail';
import { getCallNote, getActivity } from 'src/stores/helpers';

const mapStateToProps = (state, { callNoteId }) => {
  const {
    reflection,
    menteeState: mood,
    objectiveAchieved: completed,
    activityHelpful: rating,
    callActivity: activityId,
    callStartTime: time,
  } = getCallNote(state, callNoteId);

  const {
    objective,
    icon,
  } = getActivity(state, activityId);

  return {
    time,
    objective,
    icon,
    reflection,
    mood,
    completed,
    rating,
  };
};

export { mapStateToProps };
export default connect(mapStateToProps)(CallNoteDetail);
