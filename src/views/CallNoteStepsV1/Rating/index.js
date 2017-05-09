import React, { PropTypes } from 'react';
import { View, ScrollView } from 'react-native';
import { RadioList } from 'src/components';

import { FormStep } from 'src/components';
import styles from 'src/views/CallNoteStepsV1/styles';
import * as constants from 'src/constants/callNotes';


const Rating = ({
  onChange,
  callNote: { activityHelpful = -1 },
  ...props,
}) => {
  return (
    <FormStep
      paginationDisabled={activityHelpful.length === 0}
      title="Was the activity helpful in facilitating your discussion?"
      {...props}
    >
      <View style={styles.ratingContainer}>
        <ScrollView>
          <View>
            <RadioList
              uid="ratings"
              items={constants.RATING_ITEMS}
              onIndexChanged={item => onChange({
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
  callNote: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default Rating;
