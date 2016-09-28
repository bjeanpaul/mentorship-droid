import React, { PropTypes } from 'react';
import { Stepper } from 'src/components';
import containers from 'src/containers/OnboardingStepsContainer';


const Onboarding = ({
  navigationState,
}) => (
  <Stepper navigationState={navigationState}>
    <containers.Greeting />
    <containers.ProfilePicture />
    <containers.Occupation />
    <containers.Inspiration />
    <containers.Motivation />
    <containers.ThreeWords />
    <containers.Skills />
    <containers.Saving />
  </Stepper>
);


Onboarding.propTypes = {
  navigationState: PropTypes.object.isRequired,
};


export default Onboarding;
