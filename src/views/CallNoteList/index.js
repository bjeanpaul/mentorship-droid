import moment from 'moment';
import React, { PropTypes } from 'react';
import { View, ScrollView, TouchableNativeFeedback } from 'react-native';
import { BaseView, Text, Header, HeaderIcon } from 'src/components';

import styles from './styles';

const CallNoteList = ({
  callNotes = [],
  onRowPress,
  onDismissPress,
}) => (
  <BaseView>
    <Header>
      <Text style={Text.types.title}>Call Notes</Text>
      <HeaderIcon
        uid="dismiss"
        type={HeaderIcon.types.dismissDark}
        onPress={onDismissPress}
      />
    </Header>
    <ScrollView>
      {callNotes.map(callNote =>
        <TouchableNativeFeedback
          callNoteId={callNote.id}
          key={callNote.id}
          onPress={() => onRowPress(callNote.id)}
        >
          <View style={styles.row}>
            <Text style={styles.rowText}>
              {moment(callNote.callStartTime).format('ddd, MMM D, h:mm a')}
            </Text>
          </View>
        </TouchableNativeFeedback>
      )}
    </ScrollView>
  </BaseView>
);


CallNoteList.propTypes = {
  callNotes: PropTypes.array.isRequired,
  onRowPress: PropTypes.func.isRequired,
  onDismissPress: PropTypes.func.isRequired,
};


export default CallNoteList;
