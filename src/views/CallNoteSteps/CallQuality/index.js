import React, { PropTypes } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, RadioList } from 'src/components';

import { FormStep } from 'src/components';
import styles from 'src/views/CallNoteSteps/styles';
import * as constants from 'src/constants/callNote';


const CallQuality = ({
  onChange,
  callNote: { callQuality = '' },
  ...props,
}) => {
  const values = [
    constants.CALL_QUALITY_EXCELLENT,
    constants.CALL_QUALITY_OK,
    constants.CALL_QUALITY_INAUDIBLE,
    constants.CALL_QUALITY_DROPPED,
    constants.CALL_QUALITY_DELAYED,
  ];

  const initialSelectedIndex = values.indexOf(callQuality);

  return (
    <FormStep
      paginationDisabled={callQuality.length === 0}
      title="Rate the call quality"
      {...props}
    >
      <View style={styles.callQualityContainer}>
        <Text style={styles.callQualityHintText}>
          Please help us improve our service by letting us know what the call quality was like.
        </Text>
        <ScrollView>
          <View>
            <RadioList
              uid="callQualities"
              items={values.map(v => constants.CALL_QUALITY_ITEMS[v])}
              onIndexChanged={
                item => onChange({
                  callQuality: values[item.index],
                })
              }
              initialSelectedIndex={initialSelectedIndex}
            />
          </View>
        </ScrollView>
      </View>
    </FormStep>
  );
};

CallQuality.propTypes = {
  callNote: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default CallQuality;
