import { isUndefined, map } from 'lodash';
import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';

import * as constants from 'src/constants/callNotes';
import { FormStep, Radio, RadioItem } from 'src/components';


const CallQuality = ({
  callNote,
  onChange,
  onDonePress,
  ...props,
}) => (
  <FormStep
    last
    paginationDisabled={isUndefined(callNote.callQuality)}
    title="Rate the call quality"
    onDonePress={() => onDonePress(callNote)}
    {...props}
  >
    <ScrollView>
      <Radio
        uid="callQualityItems"
        selection={callNote.callQuality}
        onSelect={selection => onChange({ callQuality: selection })}
      >
      {
        map(constants.V2_CALL_QUALITY_LABELS, (label, value) =>
          <RadioItem key={value} value={value}>{label}</RadioItem>)
      }
      </Radio>
    </ScrollView>
  </FormStep>
);

CallQuality.propTypes = {
  callNote: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onDonePress: PropTypes.func.isRequired,
};


export default CallQuality;
