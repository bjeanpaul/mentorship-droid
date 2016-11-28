import React, { PropTypes } from 'react';

import { Event } from 'src/components';
import { EVENT_MOOD_IMAGES } from 'src/constants/callNotes';


const CallNoteEvent = ({
  event: {
    occuredAt,
  },
  callNote: {
    id,
    menteeState,
    reflection,
  },
  onPress,
}) => (
  <Event
    date={occuredAt}
    icon={EVENT_MOOD_IMAGES[menteeState]}
    blurb={reflection}
    title="Call completed"
    onPress={() => onPress(id)}
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

  onPress: PropTypes.func,
};


export default CallNoteEvent;
