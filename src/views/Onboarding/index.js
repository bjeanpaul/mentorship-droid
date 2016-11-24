import React, { PropTypes } from 'react';

import { Stepper } from 'src/components';
import Greeting from './Greeting';
import ProfilePicture from './ProfilePicture';
import Occupation from './Occupation';
import Inspiration from './Inspiration';
import Motivation from './Motivation';
import ThreeWords from './ThreeWords';
import Skills from './Skills';


const Onboarding = ({
  navigationState,
  ...props,
}) => (
  <Stepper navigationState={navigationState}>
    <Greeting {...props} />
    <ProfilePicture {...props} />
    <Occupation {...props} />
    <Inspiration {...props} />
    <Motivation {...props} />
    <ThreeWords {...props} />
    <Skills {...props} />
  </Stepper>
);


Onboarding.propTypes = {
  profile: PropTypes.object,
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
};

export default Onboarding;
