import React, { PropTypes } from 'react';

import { FormStep } from 'src/components';


const ObjectiveAchieved = ({
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

ObjectiveAchieved.propTypes = {
  callNote: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default ObjectiveAchieved;
