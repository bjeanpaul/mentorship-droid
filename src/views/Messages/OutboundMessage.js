import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import MentorAvatar from './MentorAvatar';
import MessageBubble from './MessageBubble';


const OutboundMessage = ({
  message,
  profile,
}) => (
  <View style={styles.message}>
    <MentorAvatar profile={profile} />

    <MessageBubble
      styles={MessageBubble.themes.dark}
      {...message}
    />
  </View>
);


OutboundMessage.propTypes = {
  message: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};


export default OutboundMessage;
