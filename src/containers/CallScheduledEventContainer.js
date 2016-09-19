import { connect } from 'react-redux';
import { Event } from 'src/components';
import { JOURNEY_EVENT_SCHEDULED_CALL_ICON } from 'src/constants/images';
import { getScheduledCallActivity } from 'src/stores/helpers';


const mapStateToProps = (state, {
  objectId: scheduledCallId,
  eventType: type,
  occuredAt: date,
}) => {
  const activity = getScheduledCallActivity(state, scheduledCallId);
  return {
    type,
    date,
    icon: activity && activity.icon || JOURNEY_EVENT_SCHEDULED_CALL_ICON,
    title: 'Call scheduled',
  };
};


export { mapStateToProps };
export default connect(mapStateToProps)(Event);
