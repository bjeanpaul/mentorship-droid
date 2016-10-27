import React, { PropTypes } from 'react';

import { Event } from 'src/components';
import { EVENT_MOOD_IMAGES } from 'src/constants/callNote';


const CallNoteEvent = ({
  event: {
    occuredAt,
  },
  callNote: {
    menteeState,
    reflection,
  },
}) => (
  <Event
    date={occuredAt}
    icon={EVENT_MOOD_IMAGES[menteeState]}
    blurb={reflection}
    title="Call completed"
  />
);


CallNoteEvent.propTypes = {
  event: PropTypes.shape({
    occuredAt: PropTypes.string.isRequired,
  }).isRequired,

  callNote: PropTypes.shape({
    menteeState: PropTypes.string.isRequired,
    reflection: PropTypes.string.isRequired,
  }).isRequired,
};


export default CallNoteEvent;
