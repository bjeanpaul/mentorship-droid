import React, { PropTypes } from 'react';

import { FormStep } from 'src/components';


const UnplannedActivityProgress = ({
  callNote,
  onChange,
  ...props,
}) => callNote && onChange && (
  <FormStep
    paginationDisabled={false}
    title=""
    {...props}
  />
);

UnplannedActivityProgress.propTypes = {
  callNote: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default UnplannedActivityProgress;
