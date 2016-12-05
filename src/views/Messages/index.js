import { fromPairs } from 'lodash';
import React, { PropTypes } from 'react';
import { View, ScrollView } from 'react-native';

import { BaseView, PatternBackground, Text } from 'src/components';
import * as constants from 'src/constants/messages';
import styles from './styles';


const Messages = ({
  groups,
}) => (
  <BaseView>
    <PatternBackground>
      <ScrollView>
        {groups.map((group, i) => <MessageGroup key={i} {...group} />)}
      </ScrollView>
    </PatternBackground>
  </BaseView>
);


Messages.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object),
};


const MessageGroup = ({
  messages,
}) => (
  <View>
    {messages.map((message, i) => <Message key={i} {...message} />)}
  </View>
);


const messageTypeContentStyle = fromPairs([
  [constants.MESSAGE_TYPE_SENT, styles.messageContentSent],
  [constants.MESSAGE_TYPE_RECEIVED, styles.messageContentReceived],
]);


const Message = ({
  type,
  content,
}) => (
  <View style={styles.message}>
    <Text style={[styles.messageContent, messageTypeContentStyle[type]]}>
      {content}
    </Text>
  </View>
);


MessageGroup.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
};


Message.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
};


export default Messages;
