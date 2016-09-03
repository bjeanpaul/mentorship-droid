import React, { PropTypes } from 'react';
import { Text, MultiLineTextInput } from 'src/components';
import FormStep from 'src/containers/OnboardingFormStepContainer';
import styles from './styles';


const ThreeWords = ({
  threeWords = '',
  onChangeText,
}) => (
  <FormStep
    title="Describe yourself in three words"
    paginationDisabled={threeWords.split(' ').length < 3}
  >
    <MultiLineTextInput
      value={threeWords}
      placeholder="Type your answer here"
      onChangeText={text => onChangeText({ threeWords: text })}
    />
    <Text style={styles.hint}>e.g. curious, savvy, blunt, friendly</Text>
  </FormStep>
);


ThreeWords.propTypes = {
  threeWords: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


export default ThreeWords;
