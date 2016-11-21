import React, { PropTypes } from 'react';

import { MultiLineTextInput, FormStep } from 'src/components';


const Skills = ({
  profile: { skills = '' },
  onChange,
  ...props,
}) => (
  <FormStep
    title="What skills and strengths do you have that will help you as a Mentor?"
    paginationDisabled={skills.length === 0}
    {...props}
  >
    <MultiLineTextInput
      value={skills}
      placeholder="Type your answer here"
      maxLength={50}
      onChangeText={text => onChange({ skills: text })}
    />
  </FormStep>
);


Skills.propTypes = {
  profile: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired,
};


export default Skills;
