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
      {callNotes.map((callNote, index) =>
        <TouchableNativeFeedback
          callNoteId={callNote.id}
          key={index}
          onPress={() => onRowPress(callNote)}
        >
          <View style={styles.row}>
            <Text style={styles.rowText}>
              {moment(callNote.callStartTime).format('dddd Do, MMMM YYYY')}
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
