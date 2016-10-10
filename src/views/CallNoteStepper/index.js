import React, { PropTypes } from 'react';
import { Stepper } from 'src/components';
import containers from 'src/containers/CallNoteStepsContainer';

const CallNoteStepper = ({
  navigationState,
  callId,
  activityId,
}) => (
  <Stepper navigationState={navigationState}>
    <containers.Rating />
    <containers.Completed activityId={23} />
    <containers.Mood />
    <containers.Reflections />
  </Stepper>
);


CallNoteStepper.propTypes = {
  navigationState: PropTypes.object.isRequired,
  callId: PropTypes.number,
  activityId: PropTypes.number,
};


export default CallNoteStepper;
