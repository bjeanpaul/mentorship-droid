import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { Text } from 'src/components';
import { formatDateRelatively } from 'src/helpers';
import Message from './Message';
import styles from './styles';


const MessageGroup = ({
  date,
  items,
}) => (
  <View>
    <Text style={styles.groupDate}>{formatDateRelatively(date)}</Text>
    {items.map(msg => <Message key={msg.id} {...msg} />)}
  </View>
);


MessageGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};


export default MessageGroup;
