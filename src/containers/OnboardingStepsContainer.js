import { pick } from 'lodash';
import { connect } from 'react-redux';
import { chooseProfilePicture, updateProfile, stepForward } from 'src/actions/onboarding';


import Greeting from 'src/views/OnboardingStepGreeting';
import ProfilePicture from 'src/views/OnboardingFormStepProfilePicture';
import Occupation from 'src/views/OnboardingFormStepOccupation';
import Motivation from 'src/views/OnboardingFormStepMotivation';
import Inspiration from 'src/views/OnboardingFormStepInspiration';
import ThreeWords from 'src/views/OnboardingFormStepThreeWords';
import Skills from 'src/views/OnboardingFormStepSkills';


const onboardContainer = ({
  component,
  profileProps,
  actions = {
    onChangeText: updateProfile,
  },
}) => connect(
  state => pick(state.onboarding.profile, profileProps),
  actions,
)(component);


export default {
  Greeting: onboardContainer({
    component: Greeting,
    profileProps: ['firstName'],
    actions: {
      onCompleteProfilePress: stepForward,
    },
  }),

  ProfilePicture: onboardContainer({
    component: ProfilePicture,
    profileProps: ['profilePicture'],
    actions: {
      onChoosePhotoPress: chooseProfilePicture,
    },
  }),

  Occupation: onboardContainer({
    component: Occupation,
    profileProps: ['jobTitle', 'jobSector'],
  }),

  Motivation: onboardContainer({
    component: Motivation,
    profileProps: ['motivation'],
  }),

  Inspiration: onboardContainer({
    component: Inspiration,
    profileProps: ['inspiration'],
  }),

  ThreeWords: onboardContainer({
    component: ThreeWords,
    profileProps: ['tags'],
  }),

  Skills: onboardContainer({
    component: Skills,
    profileProps: ['skills'],
  }),
};
