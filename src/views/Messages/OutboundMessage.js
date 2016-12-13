import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import MessageBubble from './MessageBubble';


const OutboundMessage = ({
  message: { content },
}) => (
  <View style={styles.message}>
    <MessageBubble
      styles={MessageBubble.themes.dark}
      content={content}
    />
  </View>
);


OutboundMessage.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};


export default OutboundMessage;
