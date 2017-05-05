import React, { PropTypes } from 'react';

import { FormStep } from 'src/components';


const Rating = ({
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

Rating.propTypes = {
  callNote: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default Rating;
