import moment from 'moment';
import { fromPairs } from 'lodash';

import React, { PropTypes } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { BaseView, Header, HeaderIcon, Text } from 'src/components';
import * as constants from 'src/constants/callNotes';
import images from 'src/constants/images';
import styles from './styles';


const mentee = fromPairs([
  [constants.CALL_NOTES_MENTEE_HAPPY, images.CALL_NOTES_MENTEE_HAPPY],
  [constants.CALL_NOTES_MENTEE_SAD, images.CALL_NOTES_MENTEE_SAD],
  [constants.CALL_NOTES_MENTEE_BORED, images.CALL_NOTES_MENTEE_BORED],
  [constants.CALL_NOTES_MENTEE_CONFUSED, images.CALL_NOTES_MENTEE_CONFUSED],
  [constants.CALL_NOTES_MENTEE_UPSET, images.CALL_NOTES_MENTEE_UPSET],
  [constants.CALL_NOTES_MENTEE_WITHDRAWN, images.CALL_NOTES_MENTEE_WITHDRAWN],
]);


const Title = ({ children }) => (
  <View style={styles.titleContainer}>
    <Text style={Text.types.sectionTitle}>{children}</Text>
  </View>
);
Title.propTypes = {
  children: PropTypes.any,
};

const CallNoteV2Detail = ({
  onBackPress,
  call,
  callNote,
  activity,
}) => (
  <BaseView>
    <Header>
      <Text style={Text.types.title}>
        {moment(call.startTime).format('ddd, MMM D, h:MM a')}
      </Text>
      <HeaderIcon
        uid="back"
        type={HeaderIcon.types.backDark}
        onPress={onBackPress}
      />
    </Header>

    <ScrollView style={styles.scrollView}>
      <Text>Hello World</Text>
    </ScrollView>
  </BaseView>
);


CallNoteV2Detail.propTypes = {
  onBackPress: PropTypes.func.isRequired,
  callNote: PropTypes.object,
  call: PropTypes.object,
  activity: PropTypes.object,
};


export default CallNoteV2Detail;
