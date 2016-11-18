import React, { PropTypes } from 'react';

import { TextInput } from 'src/components';
import FormStep from 'src/containers/OnboardingFormStepContainer';


const Occupation = ({
  jobTitle = '',
  jobSector = '',
  onChangeText,
}) => (
  <FormStep
    paginationDisabled={jobTitle.length === 0 || jobSector.length === 0}
    title="What do you do?"
  >
    <TextInput
      label="Job Sector"
      value={jobSector}
      onChangeText={text => onChangeText({ jobSector: text })}
    />
    <TextInput
      label="Job Title"
      value={jobTitle}
      onChangeText={text => onChangeText({ jobTitle: text })}
    />
  </FormStep>
);

Occupation.propTypes = {
  jobSector: PropTypes.string,
  jobTitle: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


export default Occupation;
