import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import MessageBubble from './MessageBubble';


const SendingMessage = ({
  message,
}) => (
  <View style={styles.message}>
    <MessageBubble
      styles={MessageBubble.states.pending}
      {...message}
    />
  </View>
);


SendingMessage.propTypes = {
  message: PropTypes.object.isRequired,
};


export default SendingMessage;
