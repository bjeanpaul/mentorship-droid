import React, { PropTypes } from 'react';
import { Stepper } from 'src/components';
import containers from 'src/containers/CallNoteStepsContainer';

const CallNoteStepper = ({
  navigationState,
}) => (
  <Stepper navigationState={navigationState}>
    <containers.Mood />
    <containers.Reflections />
  </Stepper>
);


CallNoteStepper.propTypes = {
  navigationState: PropTypes.object.isRequired,
};


export default CallNoteStepper;
