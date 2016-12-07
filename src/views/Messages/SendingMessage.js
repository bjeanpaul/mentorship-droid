import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import MessageBubble from './MessageBubble';


const SendingMessage = props => (
  <View style={styles.message}>
    <MessageBubble
      styles={MessageBubble.states.pending}
      {...props}
    />
  </View>
);


export default SendingMessage;