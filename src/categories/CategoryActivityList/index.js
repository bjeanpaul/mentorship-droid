import React, { PropTypes } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { Text } from 'src/components';
import styles from './styles';


const CategoryActivityList = ({
  activities,
  onActivityPress,
}) => (
  <View>
    {activities.map(({ id, title }) => (
    <TouchableNativeFeedback
      key={id}
      activityId={id}
      onPress={() => onActivityPress(id)}
    >
      <View style={styles.activity}>
        <Text style={styles.activityTitle}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
    ))}
  </View>
);


CategoryActivityList.propTypes = {
  onActivityPress: PropTypes.func.isRequired,
  activities: PropTypes.array.isRequired,
};


export default CategoryActivityList;
