import React, { PropTypes } from 'react';
import { View, Image, ScrollView, TouchableNativeFeedback } from 'react-native';
import { Text } from 'src/components';
import images from 'src/constants/images';
import { ImageUrl } from 'src/api';
import styles from './styles';


const ActivityList = ({
  category: { color },
  activities,
  onActivityPress,
}) => (
  <ScrollView>
    {activities.map(({ id, title, icon, isComplete }) => (
    <TouchableNativeFeedback
      key={id}
      uid={`activity:${id}`}
      onPress={() => onActivityPress(id)}
    >
      <View style={styles.activity}>
        <ActivityIcon icon={icon} color={color} isComplete={isComplete} />
        <Text numberOfLines={3} style={styles.activityTitle}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
    ))}
  </ScrollView>
);


const ActivityIcon = ({
  icon,
  color,
  isComplete,
}) => (
  <View style={styles.activityIconContainer}>
    <View
      style={[
        styles.activityIcon,
        isComplete
          ? { backgroundColor: color }
          : styles.activityIconIsIncomplete,
      ]}
    >
      <Image
        source={icon.toSource(images.ACTIVITY_ICON_FALLBACK)}
        style={styles.activityIconImage}
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
  </View>
);


ActivityList.propTypes = {
  category: PropTypes.object.isRequired,
  activities: PropTypes.array.isRequired,
  onActivityPress: PropTypes.func.isRequired,
};


ActivityIcon.propTypes = {
  icon: PropTypes.instanceOf(ImageUrl),
  color: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};


export default ActivityList;
