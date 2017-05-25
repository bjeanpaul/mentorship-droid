import { isUndefined, map } from 'lodash';
import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';

import * as constants from 'src/constants/callNotes';
import { FormStep, Radio, RadioItem } from 'src/components';


const ObjectiveAchieved = ({
  callNote: { objectiveAchieved },
  onChange,
  ...props,
}) => (
  <FormStep
    paginationDisabled={isUndefined(objectiveAchieved)}
    title="To what extent did you achieve your objective?"
    {...props}
  >
    <ScrollView>
      <Radio
        uid="objectiveAchievedItems"
        selection={objectiveAchieved}
        onSelect={selection => onChange({ objectiveAchieved: selection })}
      >
      {
        map(constants.V2_OBJECTIVE_ACHIEVED_LABELS, (label, value) =>
          <RadioItem key={value} value={value}>{label}</RadioItem>)
      }
      </Radio>
    </ScrollView>
  </FormStep>
);

ObjectiveAchieved.propTypes = {
  callNote: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default ObjectiveAchieved;
