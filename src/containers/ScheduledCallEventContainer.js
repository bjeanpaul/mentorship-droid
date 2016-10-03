import moment from 'moment';
import { connect } from 'react-redux';
import { Event } from 'src/components';
import images from 'src/constants/images';
import { getScheduledCall, getScheduledCallActivity } from 'src/stores/helpers';


const mapStateToProps = (state, {
  objectId: scheduledCallId,
  eventType: type,
  occuredAt: date,
}) => {
  const scheduledCall = getScheduledCall(state, scheduledCallId);
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
    blurb: moment(scheduledCall.callTime).format('dddd Do, MMMM YYYY h:mm a'),
  };
};


export { mapStateToProps };
export default connect(mapStateToProps)(Event);
