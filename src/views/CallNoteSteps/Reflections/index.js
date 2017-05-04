import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';

import { FormStep, MultiLineTextInput } from 'src/components';


const Reflections = ({
  onChange,
  callNote: { reflection = '' },
  ...props,
}) => (
  <FormStep
    paginationBackDisabled
    paginationDisabled={reflection.length === 0}
    title="Please share your reflections of the discussion"
    {...props}
  >
    <ScrollView>
      <MultiLineTextInput
        uid="reflectionInput"
        value={reflection}
        placeholder="Type your answer here"
        onChangeText={text => onChange({ reflection: text })}
      />
    </ScrollView>
  </FormStep>
);

Reflections.propTypes = {
  callNote: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default Reflections;
