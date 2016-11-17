import React, { PropTypes } from 'react';
import { View, ScrollView } from 'react-native';
import { RadioList } from 'src/components';

import { FormStep } from 'src/components';
import styles from './styles';


const Rating = ({
  onChange,
  callNote: { activityHelpful = '' },
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
              uid="ratings"
              items={items}
              onIndexChanged={(item) => onChange({ activityHelpful: item.item })}
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

Rating.propTypes = {
  callNote: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default Rating;
