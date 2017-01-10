import React from 'react';
import { Text } from 'react-native';

import Image from './Image';


const rules = styles => ({
  mentorshipImage: {
    react: node => (
      <Image styles={styles} url={node.url} />
    ),
  },
  u: {
    react: (node, output, state) => {
      const children = output(node.content, {
        ...state,
        withinText: true,
      });

      return (
        <Text key={state.key} style={styles.u}>{children}</Text>
      );
    },
  },
});


export default rules;
