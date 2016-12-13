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
  onRetryPress,
}) => {
  const groups = groupByDate(messages, 'day', 'asc', 'timestamp');

  return (
    <BaseView>
      <PatternBackground>
        <ScrollView>
          <View style={styles.messages}>
            {
              groups.map(group =>
                <MessageGroup
                  key={group.date}
                  onRetryPress={onRetryPress}
                  {...group}
                />)
            }
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
  onRetryPress: PropTypes.func.isRequired,
};


export default Messages;
