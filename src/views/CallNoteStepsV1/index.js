import React, { PropTypes } from 'react';

import { Stepper } from 'src/components';
import Reflections from './Reflections';
import Mood from './Mood';
import Completed from './Completed';
import Rating from './Rating';
import CallQuality from './CallQuality';


const CallNoteStepsV1 = props => {
  if (props.activity) {
    return (
      <Stepper>
        <Reflections {...props} />
        <Mood {...props} />
        <Completed {...props} />
        <Rating {...props} />
        <CallQuality {...props} />
      </Stepper>
    );
  } else {
    return (
      <Stepper>
        <Reflections {...props} />
        <Mood {...props} />
        <CallQuality {...props} />
      </Stepper>
    );
  }
};


CallNoteStepsV1.propTypes = {
  activity: PropTypes.any,
};


export default CallNoteStepsV1;

export {
  Reflections,
  Mood,
  Completed,
  Rating,
  CallQuality,
};
