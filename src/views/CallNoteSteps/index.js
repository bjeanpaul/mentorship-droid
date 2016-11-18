import { upperFirst, isUndefined } from 'lodash';
import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Text, MultiLineTextInput, RadioList } from 'src/components';

import { Section } from 'src/views/Activity';
import FormStep from 'src/containers/CallNoteFormStepContainer';
import * as constants from 'src/constants/callNote';
import images from 'src/constants/images';
import styles from './styles';


const Reflections = ({
  reflection = '',
  onChangeText,
}) => (
  <FormStep
    paginationBackDisabled
    paginationDisabled={reflection.length === 0}
    title="Please share your reflections of the discussion"
  >
    <MultiLineTextInput
      value={reflection}
      placeholder="Type your answer here"
      onChangeText={text => onChangeText({ reflection: text })}
    />

  </FormStep>
);
Reflections.propTypes = {
  reflection: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


const Mood = ({
  menteeState = '',
  onSelectImage,
}) => (
  <FormStep
    paginationDisabled={menteeState.length === 0}
    title="How was your Mentee today?"
  >
    <View style={styles.list}>
      {Object.keys(constants.MOOD_IMAGES).map(key => (
        <TouchableWithoutFeedback
          key={key}
          onPress={() => onSelectImage({ menteeState: key })}
        >
          <View style={styles.item}>
            <Image
              style={[styles.image, menteeState === key && styles.imageIsSelected]}
              source={constants.MOOD_IMAGES[key]}
            >
            { menteeState !== key && <View style={styles.imageHighlight} /> }
            </Image>
            <Text style={styles.label}>{upperFirst(key)}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  </FormStep>
);
Mood.propTypes = {
  menteeState: PropTypes.string,
  onSelectImage: PropTypes.func.isRequired,
};


const Completed = ({
  objectiveAchieved,
  objective,
  color,
  onSelectImage,
}) => (
  <FormStep
    paginationDisabled={isUndefined(objectiveAchieved)}
    title="Did you achieve the objective?"
  >
    <View style={styles.completedContainer}>
      <View style={styles.yesNoContainer}>
        <TouchableWithoutFeedback onPress={() => onSelectImage({ objectiveAchieved: true })}>
          <Image
            source={
              objectiveAchieved ?
              images.CALL_NOTES_COMPLETED_YES_SELECTED :
              images.CALL_NOTES_COMPLETED_YES
            }
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => onSelectImage({ objectiveAchieved: false })}>
          <Image
            source={
              objectiveAchieved === false ?
              images.CALL_NOTES_COMPLETED_NO_SELECTED :
              images.CALL_NOTES_COMPLETED_NO
            }
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.objectiveContainer}>
        <ScrollView>
          <Section
            color={color}
            icon={images.ACTIVITY_OBJECTIVE}
            title="Objective"
          >
            {objective}
          </Section>
        </ScrollView>
      </View>
    </View>
  </FormStep>
);
Completed.propTypes = {
  objectiveAchieved: PropTypes.any,
  onSelectImage: PropTypes.func.isRequired,
  objective: PropTypes.string,
  color: PropTypes.string,
};


const Rating = ({
  activityHelpful = -1,
  onChangeText,
}) => {
  return (
    <FormStep
      paginationDisabled={activityHelpful.length === 0}
      title="Was the activity helpful in facilitating your discussion?"
    >
      <View style={styles.ratingContainer}>
        <ScrollView>
          <View>
            <RadioList
              items={constants.RATING_ITEMS}
              onIndexChanged={item => onChangeText({
                activityHelpful: item.index.toString(),
              })}
              initialSelectedIndex={+activityHelpful}
            />
          </View>
        </ScrollView>
      </View>
    </FormStep>
  );
};
Rating.propTypes = {
  activityHelpful: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


const CallQuality = ({
  callQuality = '',
  onChangeText,
}) => {
  const values = [
    constants.CALL_QUALITY_EXCELLENT,
    constants.CALL_QUALITY_OK,
    constants.CALL_QUALITY_INAUDIBLE,
    constants.CALL_QUALITY_DROPPED,
    constants.CALL_QUALITY_DELAYED,
  ];

  const initialSelectedIndex = values.indexOf(callQuality);

  return (
    <FormStep
      paginationDisabled={callQuality.length === 0}
      title="Rate the call quality"
    >
      <View style={styles.callQualityContainer}>
        <Text style={styles.callQualityHintText}>
          Please help us improve our service by letting us know what the call quality was like.
        </Text>
        <ScrollView>
          <View>
            <RadioList
              items={values.map(v => constants.CALL_QUALITY_ITEMS[v])}
              onIndexChanged={
                item => onChangeText({
                  callQuality: values[item.index],
                })
              }
              initialSelectedIndex={initialSelectedIndex}
            />
          </View>
        </ScrollView>
      </View>
    </FormStep>
  );
};
CallQuality.propTypes = {
  callQuality: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


export {
  Reflections,
  Mood,
  Completed,
  Rating,
  CallQuality,
};
