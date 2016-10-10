import { upperFirst } from 'lodash';
import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { Text, MultiLineTextInput } from 'src/components';

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
  completed = false,
  objective,
  color,
  onSelectImage,
}) => (
  <FormStep
    paginationDisabled={typeof(completed) === 'boolean'}
    title="Did you achieve the objective?"
  >
    <View style={styles.completedContainer}>
      <TouchableWithoutFeedback onPress={() => onSelectImage({ completed: true })}>
        <Image
          source={
            completed ?
            images.CALL_NOTES_COMPLETED_YES_SELECTED :
            images.CALL_NOTES_COMPLETED_YES
          }
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => onSelectImage({ completed: true })}>
        <Image
          source={
            !completed ?
            images.CALL_NOTES_COMPLETED_NO_SELECTED :
            images.CALL_NOTES_COMPLETED_NO
          }
        />
      </TouchableWithoutFeedback>
    </View>
    <View style={styles.objectiveContainer}>
      <Section
        color={color}
        icon={images.ACTIVITY_OBJECTIVE}
        title="Objective"
      >
        {objective}
      </Section>
    </View>
  </FormStep>
);
Completed.propTypes = {
  completed: PropTypes.boolean,
  onSelectImage: PropTypes.func.isRequired,
  objective: PropTypes.string,
  color: PropTypes.string,
};


export {
  Reflections,
  Mood,
  Completed,
};
