import React, { PropTypes } from 'react';
import { MultiLineTextInput } from 'src/components';

import { FormStep } from 'src/components';


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
    <MultiLineTextInput
      uid="reflectionInput"
      value={reflection}
      placeholder="Type your answer here"
      onChange={text => onChange({ reflection: text })}
    />
  </FormStep>
);

Reflections.propTypes = {
  callNote: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default Reflections;
