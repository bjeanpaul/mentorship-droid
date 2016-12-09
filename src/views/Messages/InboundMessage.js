import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';

import styles from './styles';
import MenteeAvatar from './MenteeAvatar';
import MessageBubble from './MessageBubble';


const InboundMessage = ({
  message,
}) => (
  <View style={[styles.message, styles.messageInbound]}>
    <MenteeAvatar />
    <MessageBubble {...message} />
  </View>
);


InboundMessage.propTypes = {
  message: PropTypes.object.isRequired,
};


export default InboundMessage;
