import React, { PropTypes } from 'react';

import { FormStep } from 'src/components';


const CallQuality = ({
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

CallQuality.propTypes = {
  callNote: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default CallQuality;
