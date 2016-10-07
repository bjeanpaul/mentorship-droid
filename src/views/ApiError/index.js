import React, { PropTypes } from 'react';
import { Failure } from 'src/components';


// TODO tell user that we know about the error once we do know about the error
const ApiError = ({
  onDismissPress,
}) => (
  <Failure onDismissPress={onDismissPress}>
    Sorry, we seem to have an issue on our side.
  </Failure>
);


ApiError.propTypes = {
  onDismissPress: PropTypes.func.isRequired,
};


export default ApiError;
