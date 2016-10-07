import React, { PropTypes } from 'react';
import { MultiLineTextInput } from 'src/components';
import FormStep from 'src/containers/CallNoteFormStepContainer';


const Reflections = ({
  reflections = '',
  onChangeText,
}) => (
  <FormStep
    paginationDisabled={reflections.length === 0}
    title="Please share your reflections of the discussion"
  >
    <MultiLineTextInput
      value={reflections}
      placeholder="Type your answer here"
      onChangeText={text => onChangeText({ reflections: text })}
    />

  </FormStep>
);
Reflections.propTypes = {
  reflections: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};

export {
  Reflections
};
