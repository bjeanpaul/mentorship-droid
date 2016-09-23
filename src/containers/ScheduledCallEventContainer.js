import { connect } from 'react-redux';
import { Event } from 'src/components';
import images from 'src/constants/images';
import { getScheduledCallActivity } from 'src/stores/helpers';


const mapStateToProps = (state, {
  objectId: scheduledCallId,
  eventType: type,
  occuredAt: date,
}) => {
  const activity = getScheduledCallActivity(state, scheduledCallId);
  let icon = images.JOURNEY_EVENT_SCHEDULED_CALL_ICON;
  if (activity && activity.icon) {
    icon = { uri: activity.icon };
  }

  return {
    type,
    date,
    icon,
    title: 'Call scheduled',
  };
};


export { mapStateToProps };
export default connect(mapStateToProps)(Event);
