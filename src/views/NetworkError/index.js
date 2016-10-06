import React, { PropTypes } from 'react';
import { Failure } from 'src/components';


// TODO tell user that we know about the error once we do know about the error

// TODO make use of connection info once we've hooked that up to redux, display
// different copy based on whether or not we know the user is currently
// connected

const NetworkError = ({
  onDismissPress,
}) => (
  <Failure onDismissPress={onDismissPress}>
    Sorry, we don't seem to be able to connect to our side. Please check
    your device's internet connection.
  </Failure>
);


NetworkError.propTypes = {
  onDismissPress: PropTypes.func.isRequired,
};


export default NetworkError;
