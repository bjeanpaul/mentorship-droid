import React, { PropTypes } from 'react';
import { Stepper } from 'src/components';
import containers from 'src/containers/OnboardingStepsContainer';


const Onboarding = ({
  navigationState,
}) => (
  <Stepper navigationState={navigationState}>
    <containers.Greeting />
    <containers.Occupation />
    <containers.ProfilePicture />
    <containers.Inspiration />
    <containers.Motivation />
    <containers.ThreeWords />
    <containers.Skills />
  </Stepper>
);


Onboarding.propTypes = {
  navigationState: PropTypes.object.isRequired,
};


export default Onboarding;
