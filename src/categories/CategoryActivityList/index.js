import React, { PropTypes } from 'react';
import { View, Image, TouchableNativeFeedback } from 'react-native';
import { Text } from 'src/components';
import images from 'src/constants/images';
import styles from './styles';


const CategoryActivityList = ({
  category: { color },
  activities,
  onActivityPress,
}) => (
  <View>
    {activities.map(({ id, title, icon, isComplete }) => console.log(icon) || (
    <TouchableNativeFeedback
      key={id}
      activityId={id}
      onPress={() => onActivityPress(id)}
    >
      <View style={styles.activity}>
        <Image
          source={
            icon
              ? { uri: icon }
              : images.ACTIVITY_ICON_FALLBACK
          }
          style={[
            styles.activityIcon,
            isComplete
              ? { backgroundColor: color }
              : styles.activityIconIsIncomplete,
          ]}
        />

        {
          isComplete
            ? <Image
                style={styles.activityCompleteAnnotation}
                source={images.ACTIVITY_COMPLETE_ANNOTATION}
              />
            : null
        }

        <Text numberOfLines={3} style={styles.activityTitle}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
    ))}
  </View>
);


CategoryActivityList.propTypes = {
  category: PropTypes.object.isRequired,
  activities: PropTypes.array.isRequired,
  onActivityPress: PropTypes.func.isRequired,
};


export default CategoryActivityList;
