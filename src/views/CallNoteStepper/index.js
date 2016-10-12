import { isUndefined } from 'lodash';
import React, { PropTypes } from 'react';

import { Stepper } from 'src/components';


const CallNoteStepper = ({
  call,
  steps,
  navigationState,
}) => {
  const hasActivity = !isUndefined(call.activity);

  return (
    <Stepper navigationState={navigationState}>
      <steps.Reflections />
      <steps.Mood />
      {hasActivity && <steps.Completed call={call} />}
      {hasActivity && <steps.Rating />}
      <steps.CallQuality />
      <steps.Saving call={call} />
    </Stepper>
  );
};


CallNoteStepper.propTypes = {
  navigationState: PropTypes.object.isRequired,
  call: PropTypes.object,
  steps: PropTypes.object,
};


export default CallNoteStepper;
