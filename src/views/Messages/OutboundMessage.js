import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import MessageBubble from './MessageBubble';


const OutboundMessage = ({
  message,
}) => (
  <View style={styles.message}>
    <MessageBubble
      styles={MessageBubble.themes.dark}
      {...message}
    />
  </View>
);


OutboundMessage.propTypes = {
  message: PropTypes.object.isRequired,
};


export default OutboundMessage;
