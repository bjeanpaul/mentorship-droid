import React, { PropTypes } from 'react';
import { Stepper } from 'src/components';


import OnboardingStepGreetingContainer
  from 'src/containers/OnboardingStepGreetingContainer';
import OnboardingFormStepProfilePictureContainer
    from 'src/containers/OnboardingFormStepProfilePictureContainer';
import OnboardingFormStepOccupationContainer
  from 'src/containers/OnboardingFormStepOccupationContainer';
import OnboardingFormStepInspirationContainer
    from 'src/containers/OnboardingFormStepInspirationContainer';
import OnboardingFormStepMotivationContainer
    from 'src/containers/OnboardingFormStepMotivationContainer';
import OnboardingFormStepThreeWordsContainer
  from 'src/containers/OnboardingFormStepThreeWordsContainer';
import OnboardingFormStepSkillsContainer
  from 'src/containers/OnboardingFormStepSkillsContainer';

const Onboarding = ({
  navigationState,
}) => (
  <Stepper navigationState={navigationState}>
    <OnboardingStepGreetingContainer />
    <OnboardingFormStepProfilePictureContainer />
    <OnboardingFormStepOccupationContainer />
    <OnboardingFormStepInspirationContainer />
    <OnboardingFormStepMotivationContainer />
    <OnboardingFormStepThreeWordsContainer />
    <OnboardingFormStepSkillsContainer />
  </Stepper>
);


Onboarding.propTypes = {
  navigationState: PropTypes.object.isRequired,
};


export default Onboarding;
