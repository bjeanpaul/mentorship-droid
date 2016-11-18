import React, { PropTypes } from 'react';
import { Stepper } from 'src/components';
import containers from 'src/containers/OnboardingStepsContainer';

import Greeting from './Greeting';
import ProfilePicture from './ProfilePicture';
import Occupation from './Occupation';
import Inspiration from './Inspiration';
import Motivation from './Motivation';
import ThreeWords from './ThreeWords';
import Skills from './Skills';
import Saving from './Saving';


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


export {
  Greeting,
  ProfilePicture,
  Occupation,
  Inspiration,
  Motivation,
  ThreeWords,
  Skills,
  Saving,
};

export default Onboarding;
