import React, { PropTypes } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import ScrollView from 'react-native-invertible-scroll-view';

import { BaseView, PatternBackground } from 'src/components';
import styles from './styles';
import MessageGroup from './MessageGroup';
import Send from './Send';
import { groupByDate } from 'src/helpers';


const Messages = ({
  messages,
  onSendPress,
  onRetryPress,
  ...props,
}) => {
  const groups = groupByDate(messages, 'day', 'asc', 'timestamp');

  return (
    <BaseView>
      <KeyboardAvoidingView behaviour="height" style={{ flex: 1 }}>
        <PatternBackground>
            <ScrollView inverted>
              <View style={styles.messages}>
              {
                  groups.map(group =>
                    <MessageGroup
                      key={group.date}
                      onRetryPress={onRetryPress}
                      group={group}
                      {...props}
                    />)
              }
              </View>
            </ScrollView>

            <Send onSendPress={onSendPress} />
        </PatternBackground>
      </KeyboardAvoidingView>
    </BaseView>
  );
};


Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  onSendPress: PropTypes.func.isRequired,
  onRetryPress: PropTypes.func.isRequired,
};


export default Messages;
