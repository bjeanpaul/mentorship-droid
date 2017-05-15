import { isUndefined, map } from 'lodash';
import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';

import * as constants from 'src/constants/callNotes';
import { FormStep, Radio, RadioItem } from 'src/components';


const CallQuality = ({
  callNote: { callQuality },
  onChange,
  ...props,
}) => (
  <FormStep
    paginationDisabled={isUndefined(callQuality)}
    title="Rate the call quality"
    {...props}
  >
    <ScrollView>
      <Radio
        uid="callQualityItems"
        selection={callQuality}
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
};


export default CallQuality;
