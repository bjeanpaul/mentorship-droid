import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { Button } from 'src/components';
import styles from './styles';
import MentorAvatar from './MentorAvatar';
import MessageBubble from './MessageBubble';


const FailedMessage = ({
  message,
  profile,
  onRetryPress,
}) => (
  <View style={styles.message}>
    <MentorAvatar profile={profile} />

    <MessageBubble
      styles={MessageBubble.states.pending}
      {...message}
    />

    <Button uid="retry" onPress={() => onRetryPress(message)}>
      TRY AGAIN
    </Button>
  </View>
);


FailedMessage.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
  profile: PropTypes.object.isRequired,
  onRetryPress: PropTypes.func.isRequired,
};


export default FailedMessage;
