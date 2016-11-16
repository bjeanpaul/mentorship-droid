import React, { PropTypes } from 'react';
import { MultiLineTextInput } from 'src/components';

import { FormStep } from 'src/components';


const Reflections = ({
  reflection = '',
  onChangeText,
  ...props,
}) => (
  <FormStep
    paginationBackDisabled
    paginationDisabled={reflection.length === 0}
    title="Please share your reflections of the discussion"
    {...props}
  >
    <MultiLineTextInput
      value={reflection}
      placeholder="Type your answer here"
      onChangeText={text => onChangeText({ reflection: text })}
    />
  </FormStep>
);

Reflections.propTypes = {
  reflection: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


export default Reflections;
