import moment from 'moment';
import { fromPairs } from 'lodash';

import React, { PropTypes } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { BaseView, Header, HeaderIcon, Text } from 'src/components';
import * as constants from 'src/constants/callNote';
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
  time,
  objective,
  icon,
  reflection,
  mood,
  completed,
  rating,
}) => (
  <BaseView>
    <Header>
      <Text style={Text.types.title}>
        {moment(time).format('ddd, MMM D, h:MM a')}
      </Text>
      <HeaderIcon
        uid="back"
        type={HeaderIcon.types.backDark}
        onPress={onBackPress}
      />
    </Header>

    <ScrollView style={styles.scrollView}>
      {objective && icon && (
        <View>
          <Title>Discussion With Activity</Title>
          <View style={styles.activityContainer}>
            <Image source={{ uri: icon }} style={styles.activityImage} />
            <Text style={[Text.types.paragraph, styles.activityObjective]}>
              {objective}
            </Text>
          </View>
        </View>
      )}

      <Title>Your Reflections</Title>
      <Text style={[Text.types.paragraph, styles.sectionBottomMargin]}>
        {reflection}
      </Text>

      <Title>Your Mentee’s Mood</Title>
      <Image style={[styles.sectionBottomMargin, styles.alignCenter]}
        source={mentee[mood]}
      />

      {objective && icon && (
        <View>
          <Title>Objective Achieved</Title>
          <Image style={[styles.sectionBottomMargin, styles.alignCenter]}
            source={completed ?
              images.CALL_NOTES_COMPLETED_YES_SELECTED :
              images.CALL_NOTES_COMPLETED_NO_SELECTED
            }
          />
        </View>
      )}

      <Title>Helpfulness of Activity</Title>
      <Text style={styles.sectionBottomMargin}>
        {rating}
      </Text>
    </ScrollView>
  </BaseView>
);


CallNoteDetail.propTypes = {
  onBackPress: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  objective: PropTypes.string,
  icon: PropTypes.string,
  reflection: PropTypes.string.isRequired,
  mood: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  rating: PropTypes.string.isRequired,
};


export default CallNoteDetail;
