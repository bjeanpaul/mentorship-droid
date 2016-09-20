import moment from 'moment';
import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import { Text } from 'src/components';


const Event = ({
  date,
  icon,
  title,
  blurb,
}) => (
  <View>
    <Image source={icon} />
    <Text>{title}</Text>
    <Text>{blurb || moment(date).format('dddd Do, MMMM YYYY')}</Text>
  </View>
);


Event.propTypes = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  blurb: PropTypes.string,
};


export default Event;
