import moment from 'moment';
import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';


const MilestoneEvent = ({
  image,
  title,
  color,
}) => (
  <View>
    <Image source={categoryImage} />
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
