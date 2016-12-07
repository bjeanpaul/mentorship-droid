import React, { PropTypes } from 'react';
import { View, ScrollView } from 'react-native';

import { BaseView, PatternBackground } from 'src/components';
import styles from './styles';
import MessageGroup from './MessageGroup';
import Send from './Send';
import { groupByDate } from 'src/helpers';


const Messages = ({
  messages,
  onSendPress,
}) => {
  const groups = groupByDate(messages, 'day', 'desc', 'timestamp');

  return (
    <BaseView>
      <PatternBackground>
        <ScrollView>
          <View style={styles.messages}>
            {groups.map(group => <MessageGroup key={group.date} {...group} />)}
          </View>
        </ScrollView>

        <Send onSendPress={onSendPress} />
      </PatternBackground>
    </BaseView>
  );
};


Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  onSendPress: PropTypes.func.isRequired,
};


export default Messages;
