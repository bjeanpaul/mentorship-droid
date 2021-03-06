import moment from 'moment';
import React, { PropTypes } from 'react';
import { View, ScrollView, TouchableNativeFeedback } from 'react-native';
import { BaseView, Text, Header, HeaderIcon } from 'src/components';

import styles from './styles';

const CallNoteList = ({
  callsAndCallNotes = [],
  notDismissable,
  onViewPress,
  onAddPress,
  onDismissPress,
}) => (
  <BaseView>
    <Header>
      <Text style={Text.types.title}>Call Notes</Text>
      { !notDismissable &&
        <HeaderIcon
          uid="dismiss"
          type={HeaderIcon.types.dismissDark}
          onPress={onDismissPress}
        />
      }
    </Header>
    <ScrollView>
      {callsAndCallNotes.map(callAndCallNote =>
        <TouchableNativeFeedback
          callId={callAndCallNote.call.id}
          key={callAndCallNote.call.id}
          onPress={() => callAndCallNote.callNote
            ? onViewPress(callAndCallNote.callNote.id)
            : onAddPress({ callId: callAndCallNote.call.id })}
        >
          <View style={styles.row}>
            <Text style={styles.callNoteTitle}>
              {moment(callAndCallNote.call.startTime).format('ddd, MMM D, h:mm a')}
            </Text>
            <Text style={styles.callNoteAction}>
              { callAndCallNote.callNote ? 'VIEW' : 'ADD' }
            </Text>
          </View>
        </TouchableNativeFeedback>
      )}
    </ScrollView>
  </BaseView>
);


CallNoteList.propTypes = {
  callsAndCallNotes: PropTypes.array.isRequired,
  onViewPress: PropTypes.func.isRequired,
  onAddPress: PropTypes.func.isRequired,
  onDismissPress: PropTypes.func.isRequired,
  notDismissable: PropTypes.bool,
};


export default CallNoteList;
