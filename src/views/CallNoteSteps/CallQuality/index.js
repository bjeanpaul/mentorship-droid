import React, { PropTypes } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, RadioList } from 'src/components';

import { FormStep } from 'src/components';
import styles from './styles';


const CallQuality = ({
  callQuality = '',
  onChange,
  ...props,
}) => {
  const items = [
    'Excellent',
    'Ok',
    "Couldn't hear",
    'Call dropped',
    'Delays',
  ];
  const initialSelectedIndex = items.indexOf(callQuality);

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
              items={items}
              onIndexChanged={(item) => onChange({ callQuality: item.item })}
              initialSelectedIndex={
                initialSelectedIndex < 0
                  ? initialSelectedIndex
                  : void 0
              }
            />
          </View>
        </ScrollView>
      </View>
    </FormStep>
  );
};

CallQuality.propTypes = {
  callQuality: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};


export default CallQuality;
