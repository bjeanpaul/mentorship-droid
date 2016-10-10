import React, { PropTypes } from 'react';
import { Stepper } from 'src/components';
import containers from 'src/containers/CallNoteStepsContainer';

const CallNoteStepper = ({
  navigationState,
  callId,
  activityId,
}) => {
  if (activityId) {
    return (
      <Stepper navigationState={navigationState}>
        <containers.Reflections />
        <containers.Mood />
        <containers.Completed activityId={activityId} />
        <containers.Rating />
        <containers.CallQuality />
        <containers.Saving callId={callId} />
      </Stepper>
    );
  }

  return (
    <Stepper navigationState={navigationState}>
      <containers.Reflections />
      <containers.Mood />
      <containers.CallQuality />
      <containers.Saving callId={callId} />
    </Stepper>
  );
};


CallNoteStepper.propTypes = {
  navigationState: PropTypes.object.isRequired,
  callId: PropTypes.any,
  activityId: PropTypes.any,
};


export default CallNoteStepper;
