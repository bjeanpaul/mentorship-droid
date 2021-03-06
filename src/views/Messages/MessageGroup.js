import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { Text } from 'src/components';
import { formatDateRelatively } from 'src/helpers';
import Message from './Message';
import styles from './styles';


const MessageGroup = ({
  group: {
    date,
    items,
  },
  ...props,
}) => (
  <View>
    <Text style={styles.groupDate}>{formatDateRelatively(date)}</Text>
    {
      items.map(msg =>
        <View key={msg.id} style={styles.messageRow}>
          <Message message={msg} {...props} />
        </View>
      )
    }
  </View>
);


MessageGroup.propTypes = {
  group: PropTypes.shape({
    date: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};


export default MessageGroup;
