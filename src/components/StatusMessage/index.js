import React, { PropTypes } from 'react';

import { Text } from 'src/components';

import baseStyles, { themes } from './styles';

const StatusMessage = ({
  message,
  theme = themes.default,
}) => (
  <Text
    style={[
      baseStyles.message,
      theme.message,
    ]}
  >
    {message}
  </Text>
);


StatusMessage.propTypes = {
  message: PropTypes.string.isRequired,
  theme: PropTypes.any,
};

StatusMessage.themes = themes;

export default StatusMessage;
