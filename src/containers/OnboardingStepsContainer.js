import { pick } from 'lodash';
import { connect } from 'react-redux';
import { chooseProfilePicture, updateProfile, stepForward } from 'src/actions/onboarding';
import { getAuthUserProfile } from 'src/stores/helpers';


import Greeting from 'src/views/Greeting';
import ProfilePicture from 'src/views/ProfilePicture';
import {
  Occupation,
  Motivation,
  Inspiration,
  Skills,
  ThreeWords,
} from 'src/views/OnboardingFormSteps';


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
  Greeting: connect(
    state => ({
      name: getAuthUserProfile(state).firstName,
    }), {
      onCompleteProfilePress: stepForward,
    }
  )(Greeting),

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
