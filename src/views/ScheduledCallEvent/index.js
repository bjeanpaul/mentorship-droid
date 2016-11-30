import moment from 'moment';
import React, { PropTypes } from 'react';
import { Event } from 'src/components';
import images from 'src/constants/images';


const ScheduledCallEvent = ({
  activity,
  scheduledCall: { callTime },
}) => (
  <Event
    date={callTime}
    icon={
      activity && activity.icon
        ? { uri: activity.icon }
        : images.JOURNEY_EVENT_SCHEDULED_CALL_ICON
    }
    title="Call scheduled"
    blurb={moment(callTime).format('dddd Do, MMMM YYYY h:mm a')}
  />
);


ScheduledCallEvent.propTypes = {
  activity: PropTypes.shape({
    icon: PropTypes.any,
  }),
  scheduledCall: PropTypes.shape({
    callTime: PropTypes.string,
  }),
};


export default ScheduledCallEvent;
