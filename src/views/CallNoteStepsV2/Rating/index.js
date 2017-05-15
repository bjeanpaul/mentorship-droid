import { isUndefined, map } from 'lodash';
import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';

import * as constants from 'src/constants/callNotes';
import { FormStep, Radio, RadioItem } from 'src/components';


const Rating = ({
  callNote: { rating },
  onChange,
  ...props,
}) => (
  <FormStep
    paginationDisabled={isUndefined(rating)}
    title="How would you rate this activity?"
    {...props}
  >
    <ScrollView>
      <Radio
        uid="ratingItems"
        selection={rating}
        onSelect={selection => onChange({ rating: selection })}
      >
      {
        map(constants.V2_RATING_LABELS, (label, value) =>
          <RadioItem key={value} value={value}>{label}</RadioItem>)
      }
      </Radio>
    </ScrollView>
  </FormStep>
);

Rating.propTypes = {
  callNote: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default Rating;
