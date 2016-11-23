import React, { PropTypes } from 'react';

import { Stepper } from 'src/components';
import Reflections from './Reflections';
import Mood from './Mood';
import Completed from './Completed';
import Rating from './Rating';
import CallQuality from './CallQuality';


const CallNoteSteps = ({
  navigationState,
  ...props,
}) => {
  if (props.activity) {
    return (
      <Stepper navigationState={navigationState}>
        <Reflections {...props} />
        <Mood {...props} />
        <Completed {...props} />
        <Rating {...props} />
        <CallQuality {...props} />
      </Stepper>
    );
  } else {
    return (
      <Stepper navigationState={navigationState}>
        <Reflections {...props} />
        <Mood {...props} />
        <CallQuality {...props} />
      </Stepper>
    );
  }
};


CallNoteSteps.propTypes = {
  activity: PropTypes.any,
  navigationState: PropTypes.object.isRequired,
};


export default CallNoteSteps;

export {
  Reflections,
  Mood,
  Completed,
  Rating,
  CallQuality,
};
