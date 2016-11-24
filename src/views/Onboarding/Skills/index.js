import React, { PropTypes } from 'react';

import { MultiLineTextInput, FormStep } from 'src/components';


const Skills = ({
  profile,
  onChange,
  onDonePress,
  ...props,
}) => {
  const { skills = '' } = profile;

  return (
    <FormStep
      last
      title="What skills and strengths do you have that will help you as a Mentor?"
      paginationDisabled={skills.length === 0}
      onDonePress={() => onDonePress(profile.id, profile)}
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
};


Skills.propTypes = {
  profile: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onDonePress: PropTypes.func.isRequired,
};


export default Skills;
