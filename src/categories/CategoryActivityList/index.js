import React, { PropTypes } from 'react';
import { View, Image, ScrollView, TouchableNativeFeedback } from 'react-native';
import { Text } from 'src/components';
import images from 'src/constants/images';
import styles from './styles';


const CategoryActivityList = ({
  category: { color },
  activities,
  onActivityPress,
}) => (
  <ScrollView>
    {activities.map(({ id, title, icon, isComplete }) => (
    <TouchableNativeFeedback
      key={id}
      activityId={id}
      onPress={() => onActivityPress(id)}
    >
      <View style={styles.activity}>
        <View
          style={[
            styles.activityIconContainer,
            isComplete
              ? { backgroundColor: color }
              : styles.activityIconContainerIsIncomplete,
          ]}
        >
          <Image
            source={
              icon
                ? { uri: icon }
                : images.ACTIVITY_ICON_FALLBACK
            }
            style={styles.activityIcon}
          />
        </View>

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
  </ScrollView>
);


CategoryActivityList.propTypes = {
  category: PropTypes.object.isRequired,
  activities: PropTypes.array.isRequired,
  onActivityPress: PropTypes.func.isRequired,
};


export default CategoryActivityList;
