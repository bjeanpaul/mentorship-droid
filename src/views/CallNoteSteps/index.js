import { upperFirst, isUndefined } from 'lodash';
import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Text, MultiLineTextInput, RadioList } from 'src/components';

import { Section } from 'src/views/Activity';
import FormStep from 'src/containers/CallNoteFormStepContainer';
import { MOOD_IMAGES } from 'src/constants/callNote';
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
    styles={{title: styles.titleMoodStep}}
  >
    <View style={styles.list}>
      {Object.keys(MOOD_IMAGES).map(key => (
        <TouchableWithoutFeedback
          key={key}
          onPress={() => onSelectImage({ menteeState: key })}
        >
          <View style={styles.item}>
            <Image
              style={styles.image}
              source={MOOD_IMAGES[key]}
            >
            <View
              style={[
                styles.imageHighlight,
                menteeState === key && styles.imageIsSelected,
              ]}
            />
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
  activityHelpful = '',
  onChangeText,
}) => {
  const items = [
    'Not at all',
    'A little',
    'Somewhat',
    'Quite a bit',
    'A lot',
  ];
  const initialSelectedIndex = items.indexOf(activityHelpful);

  return (
    <FormStep
      paginationDisabled={activityHelpful.length === 0}
      title="Was the activity helpful in facilitating your discussion?"
    >
      <View style={styles.ratingContainer}>
        <ScrollView>
          <View>
            <RadioList
              items={items}
              onIndexChanged={(item) => onChangeText({ activityHelpful: item.item })}
              initialSelectedIndex={initialSelectedIndex === -1 ? initialSelectedIndex : void 0}
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
  const items = [
    'Excellent',
    'Ok',
    "Couldn't hear",
    'Call dropped',
    'Delays',
  ];
  const initialSelectedIndex = items.indexOf(callQuality);

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
              items={items}
              onIndexChanged={(item) => onChangeText({ callQuality: item.item })}
              initialSelectedIndex={initialSelectedIndex === -1 ? initialSelectedIndex : void 0}
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
