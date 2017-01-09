import React, { PropTypes } from 'react';

import { Text, TextInput, FormStep } from 'src/components';
import styles from 'src/views/Onboarding/styles';


const ThreeWords = ({
  profile: { tags = '' },
  onChange,
  ...props,
}) => (
  <FormStep
    title="Describe yourself in three words"
    paginationDisabled={tags.split(' ').length < 3}
    {...props}
  >
    <TextInput
      value={tags}
      placeholder="Type your answer here"
      onChangeText={text => onChange({ tags: text })}
    />
    <Text style={styles.hint}>e.g. curious savvy blunt</Text>
  </FormStep>
);

ThreeWords.propTypes = {
  profile: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onBackPress: PropTypes.func,
  onNextPress: PropTypes.func,
};


export default ThreeWords;
