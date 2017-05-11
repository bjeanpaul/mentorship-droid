import { isUndefined } from 'lodash';
import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';

import { Panel } from 'src/components';
import { FormStep } from 'src/components';
import images from 'src/constants/images';
import styles from 'src/views/CallNoteStepsV1/styles';


const Completed = ({
  onChange,
  callNote: { objectiveAchieved },
  activity: { objective },
  ...props,
}) => (
  <FormStep
    paginationDisabled={isUndefined(objectiveAchieved)}
    title="Did you achieve the objective?"
    {...props}
  >
    <View style={styles.completedContainer}>
      <View style={styles.yesNoContainer}>
        <TouchableWithoutFeedback
          uid="objectiveAchieved"
          onPress={() => onChange({ objectiveAchieved: true })}
        >
          <Image
            source={
              objectiveAchieved
                ? images.CALL_NOTES_COMPLETED_YES_SELECTED
                : images.CALL_NOTES_COMPLETED_YES
            }
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          uid="objectiveNotAchieved"
          onPress={() => onChange({ objectiveAchieved: false })}
        >
          <Image
            source={
              objectiveAchieved === false
                ? images.CALL_NOTES_COMPLETED_NO_SELECTED
                : images.CALL_NOTES_COMPLETED_NO
            }
          />
        </TouchableWithoutFeedback>
      </View>

      <Panel
        scrollable
        icon={images.ACTIVITY_OBJECTIVE}
        title="Objective"
        styles={Panel.types.embedded}
      >
        {objective}
      </Panel>
    </View>
  </FormStep>
);

Completed.propTypes = {
  callNote: PropTypes.object,
  activity: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default Completed;
