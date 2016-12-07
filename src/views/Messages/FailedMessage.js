import { omit } from 'lodash';
import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { Button } from 'src/components';
import styles from './styles';
import MessageBubble from './MessageBubble';


const FailedMessage = ({
  ...props,
  onRetryPress
}) => {
  const msg = omit(props, 'onRetryPress');

  return (
    <View style={styles.message}>
      <MessageBubble
        styles={MessageBubble.states.pending}
        {...props}
      />

      <Button uid="retry" onPress={() => onRetryPress(msg)}>
        TRY AGAIN
      </Button>
    </View>
  );
};


FailedMessage.propTypes = {
  onRetryPress: PropTypes.func.isRequired,
};


export default FailedMessage;
