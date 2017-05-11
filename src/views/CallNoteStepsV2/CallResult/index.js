import { fromPairs, isUndefined } from 'lodash';
import React, { PropTypes } from 'react';
import { View, ScrollView } from 'react-native';

import * as constants from 'src/constants/callNotes';
import { RadioList, FormStep } from 'src/components';


const CALL_RESULT_VALUES_TO_LABELS = fromPairs([
  [constants.V2_CALL_RESULT_COMPLETED, 'Yes, we completed it'],
  [constants.V2_CALL_RESULT_PARTIALLY_COMPLETED, 'We started it, but did not finish'],
  [constants.V2_CALL_RESULT_MENTEE_NOT_AVAILABLE, 'Mentee was not available'],
  [constants.V2_CALL_RESULT_MENTEE_RESCHEDULED, 'Mentee asked to reschedule'],
]);

const CALL_RESULT_LABELS = constants.V2_CALL_RESULT_ITEMS
  .map(k => CALL_RESULT_VALUES_TO_LABELS[k]);

const CallResult = ({
  callNote: {
    callResult,
  },
  onChange,
  ...props,
}) => (
  <FormStep
    paginationDisabled={isUndefined(callResult)}
    title="How did the call go?"
    secondaryTitle="Did you have a complete conversation?"
    {...props}
  >
    <ScrollView>
      <View>
        <RadioList
          uid="callResultItems"
          items={CALL_RESULT_LABELS}
          onIndexChanged={
            item => onChange({
              callResult: constants.V2_CALL_RESULT_ITEMS[item.index],
            })
          }
          initialSelection={callResult}
        />
      </View>
    </ScrollView>
  </FormStep>
);

CallResult.propTypes = {
  callNote: PropTypes.shape({
    callResult: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};


export default CallResult;
