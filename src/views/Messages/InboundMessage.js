import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { Text } from 'src/components';
import styles from './styles';
import Bubble from './Bubble';


const InboundMessage = ({
  content,
}) => {
  return (
    <View style={styles.message}>
      <Bubble style={styles.bubbleInbound}>
        <Text style={[styles.messageContent, styles.messageContentInbound]}>
          {content}
        </Text>
      </Bubble>
    </View>
  );
};


InboundMessage.propTypes = {
  content: PropTypes.string,
};


export default InboundMessage;
