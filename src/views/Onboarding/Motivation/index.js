import React, { PropTypes } from 'react';

import { MultiLineTextInput, FormStep } from 'src/components';


const Motivation = ({
  profile: { motivation = '' },
  onChange,
  ...props,
}) => (
  <FormStep
    title="Why did you become a mentor?"
    paginationDisabled={motivation.length === 0}
    {...props}
  >
    <MultiLineTextInput
      value={motivation}
      placeholder="Type your answer here"
      maxLength={50}
      onChangeText={text => onChange({ motivation: text })}
    />
  </FormStep>
);

Motivation.propTypes = {
  profile: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired,
};


export default Motivation;
