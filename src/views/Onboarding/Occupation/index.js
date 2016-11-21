import React, { PropTypes } from 'react';

import { TextInput, FormStep } from 'src/components';


const Occupation = ({
  profile: {
    jobTitle = '',
    jobSector = '',
  },
  onChange,
  ...props,
}) => (
  <FormStep
    paginationDisabled={jobTitle.length === 0 || jobSector.length === 0}
    title="What do you do?"
    {...props}
  >
    <TextInput
      label="Job Sector"
      value={jobSector}
      onChangeText={text => onChange({ jobSector: text })}
    />
    <TextInput
      label="Job Title"
      value={jobTitle}
      onChangeText={text => onChange({ jobTitle: text })}
    />
  </FormStep>
);

Occupation.propTypes = {
  profile: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired,
};


export default Occupation;
