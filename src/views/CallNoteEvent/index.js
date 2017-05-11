import React, { PropTypes } from 'react';

import { Event } from 'src/components';
import * as constants from 'src/constants/callNotes';


const CallNoteEventV1 = ({
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
    icon={constants.EVENT_MOOD_IMAGES[menteeState]}
    blurb={reflection}
    title="Wrote Call Notes"
    onPress={() => onPress(id)}
  />
);


const CallNoteEventV2 = ({
  event: {
    occuredAt,
  },
  callNote: {
    id,
    mood,
    reflection,
  },
  onPress,
}) => (
  <Event
    date={occuredAt}
    icon={constants.V2_EVENT_MOOD_IMAGES[mood]}
    blurb={reflection}
    title="Wrote Call Notes"
    onPress={() => onPress(id)}
  />
);


const CallNoteEvent = props => React.createElement({
  1: CallNoteEventV1,
  2: CallNoteEventV2,
}[props.callNote.version], props);


CallNoteEvent.propTypes = {
  callNote: PropTypes.shape({
    version: PropTypes.string.isRequired,
  }).isRequired,
};


CallNoteEventV1.propTypes = {
  event: PropTypes.shape({
    occuredAt: PropTypes.string.isRequired,
  }).isRequired,

  callNote: PropTypes.shape({
    id: PropTypes.any.isRequired,
    menteeState: PropTypes.string.isRequired,
    reflection: PropTypes.string.isRequired,
  }).isRequired,

  onPress: PropTypes.func,
};


CallNoteEventV2.propTypes = {
  event: PropTypes.shape({
    occuredAt: PropTypes.string.isRequired,
  }).isRequired,

  callNote: PropTypes.shape({
    id: PropTypes.any.isRequired,
    mood: PropTypes.string.isRequired,
    reflection: PropTypes.string.isRequired,
  }).isRequired,

  onPress: PropTypes.func,
};


export default CallNoteEvent;
