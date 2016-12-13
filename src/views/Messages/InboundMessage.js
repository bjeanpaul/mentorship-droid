import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import MessageBubble from './MessageBubble';


const InboundMessage = ({
  message: { content },
}) => (
  <View style={styles.message}>
    <MessageBubble content={content} />
  </View>
);


InboundMessage.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};


export default InboundMessage;
