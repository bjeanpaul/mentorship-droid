import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { Button, Text } from 'src/components';
import styles from './styles';
import MentorAvatar from './MentorAvatar';
import MessageBubble from './MessageBubble';


const FailedMessage = ({
  message,
  profile,
  onRetryPress,
}) => (
  <View>
    <View style={styles.message}>
      <MentorAvatar profile={profile} />

      <MessageBubble
        styles={MessageBubble.states.pending}
        {...message}
      />
    </View>

    <View style={styles.retry}>
      <Text style={styles.retryContent}>SENDING FAILED</Text>
      <Button
        uid="retry"
        onPress={() => onRetryPress(message)}
        styles={Button.sizes.small}
      >
        TRY AGAIN
      </Button>
    </View>
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
