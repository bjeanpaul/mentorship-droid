import React, { PropTypes } from 'react';
import { View } from 'react-native';
import Message from './Message';


const MessageGroup = ({
  messages,
}) => (
  <View>
    {messages.map((message, i) => <Message key={i} {...message} />)}
  </View>
);


MessageGroup.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
};


export default MessageGroup;
