import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import MentorAvatar from './MentorAvatar';
import MessageBubble from './MessageBubble';


const SendingMessage = ({
  message,
  profile,
}) => (
  <View style={styles.message}>
    <MentorAvatar profile={profile} />

    <MessageBubble
      styles={MessageBubble.states.pending}
      {...message}
    />
  </View>
);


SendingMessage.propTypes = {
  message: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};


export default SendingMessage;
