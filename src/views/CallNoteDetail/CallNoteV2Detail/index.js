import moment from 'moment';
import { fromPairs, upperFirst } from 'lodash';

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

// const activity_completion =


// EXCELLENT', 'Excellent'
// OK', 'Ok'
// INAUDIBLE', 'Inaudible'
// DROPPED', 'Dropped'
// DELAYED', 'Delayed'

const callResults = fromPairs([
  ['COMPLETED', 'We completed it'],
  ['PARTIALLY_COMPLETED', 'Partially completed'],
  ['MENTEE_NOT_AVAILABLE', 'Mentee not available'],
  ['MENTEE_RESCHEDULED', 'Mentee rescheduled'],
]);


const objectAchievedOptions = fromPairs([
  ['1', 'Objective was achieved'],
  ['2', 'Mostly achieved'],
  ['3', 'Somewhat achieved'],
  ['4', 'Achieved a little'],
  ['5', 'Not at all'],
]);

const activityRatingOptions = fromPairs([
  ['1', 'Very good'],
  ['2', 'Good'],
  ['3', 'Average'],
  ['4', 'Poor'],
  ['5', 'Very Poor'],
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
  callNote: {
    callResult,
    objectiveAchieved,
    rating,
    reflection,
    mood,
  },
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

      <View style={styles.section}>
        <Title>How Did the Call Go?</Title>

        <View style={styles.sectionBody}>
          <Text style={Text.types.paragraph}>
            {callResults[callResult]}
          </Text>
        </View>
      </View>

      {activity && (
        <View style={styles.section}>
          <Title>Activity</Title>

          <View style={styles.sectionBody}>
            <View style={styles.sectionBodyActivityItems}>
              {
                activity.icon.exists() && <Image
                  source={activity.icon.resize(72, 72).toSource()}
                  style={styles.activityImage}
                />
              }

              <Text style={[Text.types.paragraph, styles.activityObjective]}>
                {activity.objective}
              </Text>
            </View>
          </View>
        </View>
      )}

      <View style={styles.section}>
        <Title>Objective</Title>

        <View style={styles.sectionBody}>
          <Text style={Text.types.paragraph}>
            {objectAchievedOptions[objectiveAchieved]}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Title>Activity Rating</Title>

        <View style={styles.sectionBody}>
          <Text style={Text.types.paragraph}>
            {activityRatingOptions[rating]}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Title>Your Reflections</Title>

        <View style={styles.sectionBody}>
          <Text style={Text.types.paragraph}>
            {reflection}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Title>Your Mentee’s Mood</Title>

        <View style={styles.sectionMoodBody}>
          <Image
            style={styles.menteeStateImage}
            source={mentee[mood.toLowerCase()]}
          />

          <Text style={Text.types.paragraph}>
            {upperFirst(mood.toLowerCase())}
          </Text>
        </View>
      </View>

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
