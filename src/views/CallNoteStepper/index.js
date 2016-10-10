import React, { PropTypes } from 'react';
import { Stepper } from 'src/components';
import containers from 'src/containers/CallNoteStepsContainer';

const CallNoteStepper = ({
  navigationState,
  callId,
  activityId,
}) => (
  <Stepper navigationState={navigationState}>
    <containers.Reflections />
    <containers.Mood />

    { activityId ? <containers.Completed activityId={23} /> : null }
    { activityId ? <containers.Rating /> : null }
    <containers.CallQuality />
  </Stepper>
);


CallNoteStepper.propTypes = {
  navigationState: PropTypes.object.isRequired,
  callId: PropTypes.number,
  activityId: PropTypes.number,
};


export default CallNoteStepper;
