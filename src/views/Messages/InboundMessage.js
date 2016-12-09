import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import MessageBubble from './MessageBubble';


const InboundMessage = ({
  message,
}) => (
  <View style={[styles.message, styles.messageInbound]}>
    <MessageBubble {...message} />
  </View>
);


InboundMessage.propTypes = {
  message: PropTypes.object.isRequired,
};


export default InboundMessage;
