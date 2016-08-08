import React from 'react';
import { Text } from 'react-native';

import globalStyles from '../StyleSheet';

const Heading = (props) => (
  <Text
    {...props}
    style={[globalStyles.heading, props.style]}
  >
    {props.children}
  </Text>
);

export default Heading;
