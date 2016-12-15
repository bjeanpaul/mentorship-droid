import moment from 'moment';
import React, { PropTypes } from 'react';
import { Event } from 'src/components';
import images from 'src/constants/images';
import { ImageUrl } from 'src/api';


const ScheduledCallEvent = ({
  activity,
  scheduledCall: { callTime },
}) => (
  <Event
    date={callTime}
    icon={
      activity && activity.icon.exists()
        ? activity.icon.resize(56, 56).toSource()
        : images.JOURNEY_EVENT_SCHEDULED_CALL_ICON
    }
    title="Call scheduled"
    blurb={moment(callTime).format('dddd Do, MMMM YYYY h:mm a')}
  />
);


ScheduledCallEvent.propTypes = {
  activity: PropTypes.shape({
    icon: PropTypes.instanceOf(ImageUrl).isRequired,
  }),
  scheduledCall: PropTypes.shape({
    callTime: PropTypes.string,
  }),
};


export default ScheduledCallEvent;
