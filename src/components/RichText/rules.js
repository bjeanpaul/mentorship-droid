import { isString } from 'lodash';
import React from 'react';
import { Text } from 'react-native';

import Image from './Image';


const reactTextType = style => (node, output, state) => {
  const children = isString(node.content)
    ? node.content
    : output(node.content, {
      ...state,
      withinText: true,
    });

  return (
    <Text key={state.key} style={style}>{children}</Text>
  );
};


const rules = styles => ({
  mentorshipImage: {
    react: node => (
      <Image styles={styles} url={node.url} />
    ),
  },
  u: {
    react: reactTextType(styles.u),
  },
  inlineCode: {
    react: reactTextType(styles.inlineCode),
  },
});


export default rules;
