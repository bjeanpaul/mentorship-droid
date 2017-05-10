import React, { PropTypes } from 'react';

import { FormStep } from 'src/components';


const UnplannedActivityCheck = ({
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

UnplannedActivityCheck.propTypes = {
  callNote: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default UnplannedActivityCheck;
