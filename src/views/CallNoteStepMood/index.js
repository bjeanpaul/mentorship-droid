import { upperFirst } from 'lodash';
import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { Text } from 'src/components';
import FormStep from 'src/containers/CallNoteFormStepContainer';
import moods from 'src/constants/callNoteMoods';
import styles from './styles';

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
export default Mood;
