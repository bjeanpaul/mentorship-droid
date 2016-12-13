import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { Button } from 'src/components';
import styles from './styles';
import MessageBubble from './MessageBubble';


const FailedMessage = ({
  message,
  onRetryPress,
}) => {
  const { content } = message;

  return (
    <View style={styles.message}>
      <MessageBubble
        styles={MessageBubble.states.pending}
        content={content}
      />

      <Button uid="retry" onPress={() => onRetryPress(message)}>
        TRY AGAIN
      </Button>
    </View>
  );
};


FailedMessage.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
  onRetryPress: PropTypes.func.isRequired,
};


export default FailedMessage;
