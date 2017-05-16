import { map, isUndefined } from 'lodash';
import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';

import { FormStep, RadioGrid, RadioGridItem } from 'src/components';
import * as constants from 'src/constants/callNotes';


const Mood = ({
  onChange,
  callNote: { mood },
  ...props,
}) => (
  <FormStep
    paginationDisabled={isUndefined(mood)}
    title="How was your Mentee today?"
    {...props}
  >
    <ScrollView>
      <RadioGrid
        uid="moodItems"
        selection={mood}
        onSelect={value => onChange({ mood: value })}
      >
      {
        map(constants.V2_MOOD_IMAGES, (image, value) => (
          <RadioGridItem key={value} value={value} image={image}>
            {constants.V2_MOOD_LABELS[value]}
          </RadioGridItem>))
      }
      </RadioGrid>
    </ScrollView>
  </FormStep>
);


Mood.propTypes = {
  callNote: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default Mood;
