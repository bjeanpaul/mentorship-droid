import React, { PropTypes } from 'react';

import { Stepper } from 'src/components';


const CallNoteStepper = ({
  call,
  activity,
  steps,
  navigationState,
}) => {
  if (activity) {
    return (
      <Stepper navigationState={navigationState}>
        <steps.Reflections />
        <steps.Mood />
        <steps.Completed call={call} />
        <steps.Rating />
        <steps.CallQuality />
        <steps.Saving call={call} />
      </Stepper>
    );
  } else {
    return (
      <Stepper navigationState={navigationState}>
        <steps.Reflections />
        <steps.Mood />
        <steps.CallQuality />
        <steps.Saving call={call} />
      </Stepper>
    );
  }
};


CallNoteStepper.propTypes = {
  navigationState: PropTypes.object.isRequired,
  activity: PropTypes.object,
  call: PropTypes.object,
  steps: PropTypes.object,
};


export default CallNoteStepper;
