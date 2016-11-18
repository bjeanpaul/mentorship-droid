import React, { PropTypes } from 'react';

import { MultiLineTextInput } from 'src/components';
import FormStep from 'src/containers/OnboardingFormStepContainer';


const Skills = ({
  skills = '',
  onChangeText,
}) => (
  <FormStep
    title="What skills and strengths do you have that will help you as a Mentor?"
    paginationDisabled={skills.length === 0}
  >
    <MultiLineTextInput
      value={skills}
      placeholder="Type your answer here"
      maxLength={50}
      onChangeText={(text) => onChangeText({ skills: text })}
    />
  </FormStep>
);


Skills.propTypes = {
  skills: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


export default Skills;
