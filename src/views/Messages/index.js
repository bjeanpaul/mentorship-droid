import React, { PropTypes } from 'react';
import { View, ScrollView } from 'react-native';

import { BaseView, PatternBackground } from 'src/components';
import styles from './styles';
import MessageGroup from './MessageGroup';
import Send from './Send';


const Messages = ({
  groups,
  onSendPress,
}) => (
  <BaseView>
    <PatternBackground>
      <ScrollView>
        <View style={styles.messages}>
          {groups.map((group, i) => <MessageGroup key={i} {...group} />)}
        </View>
      </ScrollView>

      <Send onSendPress={onSendPress} />
    </PatternBackground>
  </BaseView>
);


Messages.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object),
  onSendPress: PropTypes.func.isRequired,
};


export default Messages;
