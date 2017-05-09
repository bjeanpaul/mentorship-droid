import moment from 'moment';
import { upperFirst } from 'lodash';

import React, { PropTypes } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { BaseView, Header, HeaderIcon, Text } from 'src/components';
import * as constants from 'src/constants/callNotes';
import styles from './styles';


export const CALL_RESULT_LABELS = {
  COMPLETED: 'We completed it',
  PARTIALLY_COMPLETED: 'Partially completed',
  MENTEE_NOT_AVAILABLE: 'Mentee not available',
  MENTEE_RESCHEDULED: 'Mentee rescheduled',
};


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
  call: {
    startTime,
  },
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
        {moment(startTime).format('ddd, MMM D, h:MM a')}
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
            {CALL_RESULT_LABELS[callResult]}
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
            {constants.V2_OBJECTIVE_ACHIEVED_LABELS[objectiveAchieved]}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Title>Activity Rating</Title>

        <View style={styles.sectionBody}>
          <Text style={Text.types.paragraph}>
            {constants.V2_RATING_LABELS[rating]}
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
            source={constants.V2_MOOD_IMAGES[mood.toLowerCase()]}
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
