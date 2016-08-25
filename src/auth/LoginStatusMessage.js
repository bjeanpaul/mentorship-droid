import React, { PropTypes } from 'react';

import { Text } from 'src/components';
import * as constants from './constants';

{/* TODO different colour for error? */}
const LoginStatusMessage = ({ type }) => {
  switch (type) {
    case constants.AUTH_STATUS_NOT_FOUND:
      return (
        <Text>
          Sorry, we couldn't find an account with that username and password combination.
        </Text>
      );

    case constants.AUTH_STATUS_ERROR:
      return (
        <Text>
          Sorry, we seem to have an issue on our side. We've been notified of
          the problem and will look into it as soon as possible.
        </Text>
      );

    default:
      return null;
  }
};

LoginStatusMessage.propTypes = {
  type: PropTypes.string,
};

export default LoginStatusMessage;
