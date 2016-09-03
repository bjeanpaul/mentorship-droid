import React, { PropTypes } from 'react';
import FormStep from 'src/containers/OnboardingFormStepContainer';
import { MultiLineTextInput } from 'src/components';


const OnboardingFormStepMotivation = ({
  motivation = '',
  onChangeText,
}) => (
  <FormStep
    title="Why did you become a mentor?"
    paginationDisabled={motivation.length === 0}
  >
    <MultiLineTextInput
      value={motivation}
      placeholder="Type your answer here"
      maxLength={50}
      onChangeText={text => onChangeText({ motivation: text })}
    />
  </FormStep>
);


OnboardingFormStepMotivation.propTypes = {
  motivation: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


export default OnboardingFormStepMotivation;
