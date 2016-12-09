import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import MentorAvatar from './MentorAvatar';
import MessageBubble from './MessageBubble';


const SendingMessage = ({
  message,
}) => (
  <View style={styles.message}>
    <MentorAvatar />

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
