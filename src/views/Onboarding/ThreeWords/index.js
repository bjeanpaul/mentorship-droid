import React, { PropTypes } from 'react';

import { Text, MultiLineTextInput } from 'src/components';
import styles from 'src/views/Onboarding/styles';
import FormStep from 'src/containers/OnboardingFormStepContainer';


const ThreeWords = ({
  tags = '',
  onChangeText,
}) => (
  <FormStep
    title="Describe yourself in three words"
    paginationDisabled={tags.split(' ').length < 3}
  >
    <MultiLineTextInput
      value={tags}
      placeholder="Type your answer here"
      onChangeText={text => onChangeText({ tags: text })}
    />
    <Text style={styles.hint}>e.g. curious, savvy, blunt, friendly</Text>
  </FormStep>
);

ThreeWords.propTypes = {
  tags: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


export default ThreeWords;
