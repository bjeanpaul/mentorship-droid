import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import { Text } from 'src/components';


const MilestoneEvent = ({
  image,
  title,
  color,
}) => (
  <View style={[{ backgroundColor: color }]}>
    <Image source={{ uri: image }} />
    <Text>Milestone Reached</Text>
    <Text>{title} Completed</Text>
  </View>
);


MilestoneEvent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};


export default MilestoneEvent;