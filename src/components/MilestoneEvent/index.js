import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import { Text } from 'src/components';
import styles from './styles';


const MilestoneEvent = ({
  image,
  title,
  color,
}) => (
  <View style={[styles.container, { backgroundColor: color }]}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: image }} />
    </View>
    <Text style={styles.milestonReachedText}>Milestone Reached</Text>
    <Text style={styles.categoryNameCompletedText}>{title} Completed</Text>
  </View>
);


MilestoneEvent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};


export default MilestoneEvent;
