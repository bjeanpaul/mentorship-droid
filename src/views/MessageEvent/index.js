import { first } from 'lodash';
import React, { PropTypes } from 'react';

import { Event } from 'src/components';
import images from 'src/constants/images';


const MessageEvent = ({
  onPress,
  events,
  latestMessage: { content },
}) => (
  <Event
    title="New messages"
    blurb={`“${content}”`}
    count={events.length}
    date={first(events).occuredAt}
    icon={images.JOURNEY_EVENT_MESSAGE_ICON}
    onPress={onPress}
  />
);


MessageEvent.propTypes = {
  onPress: PropTypes.func.isRequired,
  latestMessage: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }),
  events: PropTypes.arrayOf(PropTypes.shape({
    occuredAt: PropTypes.string.isRequired,
  })).isRequired,
};


export default MessageEvent;
