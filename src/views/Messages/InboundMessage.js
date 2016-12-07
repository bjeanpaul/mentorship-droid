import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import MessageBubble from './MessageBubble';


const InboundMessage = props => (
  <View style={styles.message}>
    <MessageBubble {...props} />
  </View>
);


export default InboundMessage;
