import React, { PropTypes } from 'react';
import { Failure } from 'src/components';


// TODO: Button for redirecting.
// TODO: Figure out if we can log this, and let the user know we know about the
// issue if we can
const LoadingFailure = ({
  onDismissPress,
}) => (
  <Failure onDismissPress={onDismissPress}>
    Sorry, we seem to have an issue on our side preventing the application
    from loading correctly.
  </Failure>
);


LoadingFailure.propTypes = {
  onDismissPress: PropTypes.func.isRequired,
};


export default LoadingFailure;
