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

const CallNoteDetail = ({
  onBackPress,
  callNote: {
    activityHelpful,
    objectiveAchieved,
    menteeState,
    reflection,
    callStartTime,
  },
  activity,
}) => (
  <BaseView>
    <Header>
      <Text style={Text.types.title}>
        {moment(callStartTime).format('ddd, MMM D, h:MM a')}
      </Text>
      <HeaderIcon
        uid="back"
        type={HeaderIcon.types.backDark}
        onPress={onBackPress}
      />
    </Header>

    <ScrollView style={styles.scrollView}>
      {activity && (
        <View style={styles.section}>
          <Title>Discussion With Activity</Title>

          <View style={[styles.sectionBody, styles.sectionBodyActivity]}>
            {
              activity.icon.exists() && <Image
                source={activity.icon.toSource()}
                style={styles.activityImage}
              />
            }

            <Text style={[Text.types.paragraph, styles.activityObjective]}>
              {activity.objective}
            </Text>
          </View>
        </View>
      )}

      <View style={styles.section}>
        <Title>Your Reflections</Title>
        <Text style={Text.types.paragraph}>
          {reflection}
        </Text>
      </View>

      <View style={styles.section}>
        <Title>Your Mentee’s Mood</Title>

        <View style={styles.sectionBody}>
          <Image
            style={styles.menteeStateImage}
            source={mentee[menteeState]}
          />
        </View>
      </View>

      {activity && (
        <View style={styles.section}>
          <Title>Objective Achieved</Title>

          <View style={styles.sectionBody}>
            <Image
              style={styles.objectiveAchievedImage}
              source={
                objectiveAchieved
                  ? images.CALL_NOTES_COMPLETED_YES_SELECTED
                  : images.CALL_NOTES_COMPLETED_NO_SELECTED
              }
            />
          </View>
        </View>
      )}

      <View style={styles.section}>
        <Title>Helpfulness of Activity</Title>
        <Text style={[Text.types.paragraph, styles.activityHelpfulText]}>
          {constants.RATING_ITEMS[activityHelpful]}
        </Text>
      </View>
    </ScrollView>
  </BaseView>
);


CallNoteDetail.propTypes = {
  onBackPress: PropTypes.func.isRequired,
  callNote: PropTypes.object,
  activity: PropTypes.object,
};


export default CallNoteDetail;
