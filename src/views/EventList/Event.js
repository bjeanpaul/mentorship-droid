import React, { PropTypes } from 'react';

import containers from 'src/containers/events';


const Event = ({
  event,
}) => {
  const { eventType } = event;
  const EventContainer = containers[eventType];
  return <EventContainer {...event} />;
};


Event.isRenderable = ({ eventType }) => eventType in containers;


Event.propTypes = {
  event: PropTypes.shape({
    eventType: PropTypes.string.isRequired,
  }).isRequired,
};


export default Event;
