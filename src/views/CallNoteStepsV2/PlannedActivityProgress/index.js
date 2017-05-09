import React, { PropTypes } from 'react';

import { FormStep } from 'src/components';


const PlannedActivityProgress = ({
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

PlannedActivityProgress.propTypes = {
  callNote: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default PlannedActivityProgress;
