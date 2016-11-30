import React, { PropTypes } from 'react';

import { Text, MultiLineTextInput, FormStep } from 'src/components';
import styles from 'src/views/Onboarding/styles';


const Inspiration = ({
  profile: { inspiration = '' },
  onChange,
  ...props,
}) => (
  <FormStep
    title="Who would you love as your own mentor?"
    paginationDisabled={inspiration.length === 0}
    {...props}
  >
    <MultiLineTextInput
      value={inspiration}
      placeholder="Type your answer here"
      onChangeText={text => onChange({ inspiration: text })}
    />
    <Text style={styles.hint}>e.g. Malala, Sania Nehwal, Chanda Kocchar</Text>
  </FormStep>
);

Inspiration.propTypes = {
  profile: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onBackPress: PropTypes.func,
  onNextPress: PropTypes.func,
};


export default Inspiration;
