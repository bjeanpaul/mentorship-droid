import React, { PropTypes } from 'react';

import { Text } from 'src/components';
import * as constants from 'src/constants/auth';

import styles from 'src/views/LoginStatusMessage/styles';


const LoginStatusMessage = ({ type }) => {
  switch (type) {
    case constants.AUTH_STATUS_NOT_FOUND:
      return (
        <Text style={styles.error}>
          Sorry, we couldn't find an account with that username and password combination.
        </Text>
      );

    case constants.AUTH_STATUS_ERROR:
      return (
        <Text style={styles.error}>
          {/* TODO Figure out if we can log this */}
          Sorry, we seem to have an issue on our side.
        </Text>
      );

    default:
      return null;
  }
};

LoginStatusMessage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default LoginStatusMessage;
