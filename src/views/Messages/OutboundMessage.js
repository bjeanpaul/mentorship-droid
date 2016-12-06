import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import MessageBubble from './MessageBubble';


const OutboundMessage = props => (
  <View style={styles.message}>
    <MessageBubble
      styles={MessageBubble.themes.dark}
      {...props}
    />
  </View>
);


export default OutboundMessage;
