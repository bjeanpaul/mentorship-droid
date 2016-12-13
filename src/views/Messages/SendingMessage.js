import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import MessageBubble from './MessageBubble';


const SendingMessage = ({
  message: { content },
}) => (
  <View style={styles.message}>
    <MessageBubble
      styles={MessageBubble.states.pending}
      content={content}
    />
  </View>
);


SendingMessage.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};


export default SendingMessage;
