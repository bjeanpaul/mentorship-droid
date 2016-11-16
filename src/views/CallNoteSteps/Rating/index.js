import React, { PropTypes } from 'react';
import { View, ScrollView } from 'react-native';
import { RadioList } from 'src/components';

import { FormStep } from 'src/components';
import styles from './styles';


const Rating = ({
  activityHelpful = '',
  onChangeText,
  ...props,
}) => {
  const items = [
    'Not at all',
    'A little',
    'Somewhat',
    'Quite a bit',
    'A lot',
  ];
  const initialSelectedIndex = items.indexOf(activityHelpful);

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
              items={items}
              onIndexChanged={(item) => onChangeText({ activityHelpful: item.item })}
              initialSelectedIndex={initialSelectedIndex === -1 ? initialSelectedIndex : void 0}
            />
          </View>
        </ScrollView>
      </View>
    </FormStep>
  );
};

Rating.propTypes = {
  activityHelpful: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


export default Rating;
