import { fromPairs } from 'lodash';
import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { Text } from 'src/components';
import * as constants from 'src/constants/messages';
import styles from './styles';
import Bubble from './Bubble';


const messageTypeStyles = fromPairs([
  [constants.MESSAGE_DIRECTION_OUTBOUND, {
    bubble: styles.bubbleOutbound,
    messageContent: styles.messageContentOutbound,
  }],
  [constants.MESSAGE_DIRECTION_INBOUND, {
    bubble: styles.bubbleInbound,
    messageContent: styles.messageContentInbound,
  }],
]);


const Message = ({
  details: { direction },
  content,
}) => {
  const directionStyles = messageTypeStyles[direction];

  return (
    <View style={styles.message}>
      <Bubble style={directionStyles.bubble}>
        <Text style={[styles.messageContent, directionStyles.messageContent]}>
          {content}
        </Text>
      </Bubble>
    </View>
  );
};


Message.propTypes = {
  content: PropTypes.string,
  details: PropTypes.shape({
    direction: PropTypes.string.isRequired,
  }).isRequired,
};


export default Message;
