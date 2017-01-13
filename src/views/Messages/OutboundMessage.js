import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import MentorAvatar from './MentorAvatar';
import MessageBubble from './MessageBubble';
import * as constants from 'src/constants/messages';


const isSystemMessage = ({ details }) =>
  details.messageType === constants.COMPLETE_MESSAGE_TYPE_SYSTEM;


const OutboundMessage = ({
  message,
  profile,
}) => (
  <View style={styles.message}>
    <MentorAvatar profile={profile} />

    <MessageBubble
      styles={MessageBubble.themes.dark}
      hint={isSystemMessage(message) && 'Sent automatically by system'}
      {...message}
    />
  </View>
);


OutboundMessage.propTypes = {
  message: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};


export default OutboundMessage;
