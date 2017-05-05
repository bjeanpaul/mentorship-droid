import React, { PropTypes } from 'react';

import { FormStep } from 'src/components';


const CallResult = ({
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

CallResult.propTypes = {
  callNote: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default CallResult;
