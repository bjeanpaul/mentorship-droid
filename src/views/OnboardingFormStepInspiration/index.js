import React, { PropTypes } from 'react';
import FormStep from 'src/containers/OnboardingFormStepContainer';
import { Text, MultiLineTextInput } from 'src/components';
import styles from './styles';


const Inspiration = ({
  inspiration = '',
  onChangeText,
}) => (
  <FormStep
    title="Who would you love as your own mentor?"
    paginationDisabled={inspiration.length === 0}
  >
    <MultiLineTextInput
      value={inspiration}
      placeholder="Type your answer here"
      onChangeText={text => onChangeText({ inspiration: text })}
    />
    <Text style={styles.hint}>e.g. Malala, Sania Nehwal, Chanda Kocchar</Text>
  </FormStep>
);


Inspiration.propTypes = {
  inspiration: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


export default Inspiration;
