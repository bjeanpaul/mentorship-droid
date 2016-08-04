import React from 'react';
import { Text } from 'react-native';


import globalStyles from 'src/StyleSheet';

const MyText = (props) => (
    <Text {...props}
      style={[globalStyles.text, props.style]}
    >
      {props.children}
    </Text>
);

export default MyText;
