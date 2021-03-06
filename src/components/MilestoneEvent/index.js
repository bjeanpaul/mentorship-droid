import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';

import { ImageUrl } from 'src/api';
import { Text } from 'src/components';
import styles from './styles';


const MilestoneEvent = ({
  image,
  title,
  color,
}) => (
  <View style={[styles.container, { backgroundColor: color }]}>
    {image.exists() && <View style={styles.imageContainer}>
      <Image
        source={image.resize(112, 112).toSource()}
        style={styles.image}
      />
    </View>}
    <Text style={styles.milestonReachedText}>Milestone Reached</Text>
    <Text style={styles.categoryNameCompletedText}>{title} Completed</Text>
  </View>
);


MilestoneEvent.propTypes = {
  image: PropTypes.instanceOf(ImageUrl).isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};


export default MilestoneEvent;
