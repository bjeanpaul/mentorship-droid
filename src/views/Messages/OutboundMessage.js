import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { Text } from 'src/components';
import styles from './styles';
import Bubble from './Bubble';


const OutboundMessage = ({
  content,
}) => {
  return (
    <View style={styles.message}>
      <Bubble style={styles.bubbleOutbound}>
        <Text style={[styles.messageContent, styles.messageContentOutbound]}>
          {content}
        </Text>
      </Bubble>
    </View>
  );
};


OutboundMessage.propTypes = {
  content: PropTypes.string,
};


export default OutboundMessage;
