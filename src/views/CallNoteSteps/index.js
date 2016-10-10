import { upperFirst } from 'lodash';
import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Text, MultiLineTextInput, RadioList } from 'src/components';

import { Section } from 'src/views/Activity';
import FormStep from 'src/containers/CallNoteFormStepContainer';
import moods from 'src/constants/callNoteMoods';
import images from 'src/constants/images';
import styles from './styles';


const Reflections = ({
  reflections = '',
  onChangeText,
}) => (
  <FormStep
    paginationDisabled={reflections.length === 0}
    title="Please share your reflections of the discussion"
  >
    <MultiLineTextInput
      value={reflections}
      placeholder="Type your answer here"
      onChangeText={text => onChangeText({ reflections: text })}
    />

  </FormStep>
);
Reflections.propTypes = {
  reflections: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


const Mood = ({
  mood = '',
  onSelectImage,
}) => (
  <FormStep
    paginationDisabled={mood.length === 0}
    title="How was your Mentee today?"
  >
    <View style={styles.list}>
      {Object.keys(moods).map(key => (
        <TouchableWithoutFeedback
          key={key}
          onPress={() => onSelectImage({ mood: key })}
        >
          <View style={styles.item}>
            <Image
              style={styles.image}
              source={moods[key]}
            >
              <View style={[styles.imageHighlight, mood === key && styles.imageIsSelected]} />
            </Image>
            <Text style={styles.label}>{upperFirst(key)}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  </FormStep>
);
Mood.propTypes = {
  mood: PropTypes.string,
  onSelectImage: PropTypes.func.isRequired,
};


const Completed = ({
  completed,
  objective,
  color,
  onSelectImage,
}) => (
  <FormStep
    paginationDisabled={typeof(completed) !== 'boolean'}
    title="Did you achieve the objective?"
  >
    <View style={styles.completedContainer}>
      <View style={styles.yesNoContainer}>
        <TouchableWithoutFeedback onPress={() => onSelectImage({ completed: true })}>
          <Image
            source={
              completed ?
              images.CALL_NOTES_COMPLETED_YES_SELECTED :
              images.CALL_NOTES_COMPLETED_YES
            }
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => onSelectImage({ completed: false })}>
          <Image
            source={
              completed === false ?
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
  completed: PropTypes.any,
  onSelectImage: PropTypes.func.isRequired,
  objective: PropTypes.string,
  color: PropTypes.string,
};


const Rating = ({
  rating = '',
  onChangeText,
}) => {
  const items = [
    'Not at all',
    'A little',
    'Somewhat',
    'Quite a bit',
    'A lot',
  ];
  const initialSelectedIndex = items.indexOf(rating);

  return (
    <FormStep
      paginationDisabled={rating.length === 0}
      title="Was the activity helpful in facilitating your discussion?"
    >
      <View style={styles.ratingContainer}>
        <ScrollView>
          <View>
            <RadioList
              items={items}
              onIndexChanged={(item) => onChangeText({ rating: item.item })}
              initialSelectedIndex={initialSelectedIndex === -1 ? initialSelectedIndex : void 0}
            />
          </View>
        </ScrollView>
      </View>
    </FormStep>
  );
};
Rating.propTypes = {
  rating: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


const CallQuality = ({
  callQuality = '',
  onChangeText,
}) => {
  const items = [
    'Excellent',
    'Ok',
    'Couldn\'t hear',
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
