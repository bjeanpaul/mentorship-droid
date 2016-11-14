import { isUndefined } from 'lodash';
import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';

import { Section } from 'src/views/Activity';
import { FormStep } from 'src/components';
import images from 'src/constants/images';
import styles from './styles';


const Completed = ({
  objectiveAchieved,
  objective,
  color,
  onSelectImage,
  ...props,
}) => (
  <FormStep
    paginationDisabled={isUndefined(objectiveAchieved)}
    title="Did you achieve the objective?"
    {...props}
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
              objectiveAchieved === false
                ? images.CALL_NOTES_COMPLETED_NO_SELECTED
                : images.CALL_NOTES_COMPLETED_NO
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


export default Completed;
