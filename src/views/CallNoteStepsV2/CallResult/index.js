import { isUndefined, unzip } from 'lodash';
import React, { PropTypes } from 'react';
import { View, ScrollView } from 'react-native';

import * as constants from 'src/constants/callNotes';
import { RadioList, FormStep } from 'src/components';


const [CALL_RESULT_ITEMS, CALL_RESULT_LABELS] = unzip([
  [constants.V2_CALL_RESULT_COMPLETED, 'Yes, we completed it'],
  [constants.V2_CALL_RESULT_PARTIALLY_COMPLETED, 'We started it, but did not finish'],
  [constants.V2_CALL_RESULT_MENTEE_NOT_AVAILABLE, 'Mentee was not available'],
  [constants.V2_CALL_RESULT_MENTEE_RESCHEDULED, 'Mentee asked to reschedule'],
]);

const CallResult = ({
  callNote: {
    callResult,
  },
  onChange,
  onDismissPress,
  ...props,
}) => (
  <FormStep
    paginationDisabled={isUndefined(callResult)}
    title="How did the call go?"
    secondaryTitle="Did you have a complete conversation?"
    {...props}
    onBackPress={onDismissPress}
  >
    <ScrollView>
      <View>
        <RadioList
          uid="callResultItems"
          items={CALL_RESULT_LABELS}
          onIndexChanged={
            item => onChange({
              callResult: CALL_RESULT_ITEMS[item.index],
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
  onDismissPress: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};


export default CallResult;
