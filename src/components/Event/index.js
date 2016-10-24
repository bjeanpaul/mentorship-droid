import moment from 'moment';
import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import { Text } from 'src/components';
import styles from './styles';

const Event = ({
  date,
  icon,
  title,
  blurb,
}) => (
  <View style={styles.container}>
    <View style={styles.icon}>
      <Image style={styles.iconImage} source={icon} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>

      <Text numberOfLines={1} style={styles.blurb}>
        {blurb || moment(date).format('dddd Do, MMMM YYYY')}
      </Text>
    </View>
  </View>
);


Event.propTypes = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string,
};


export default Event;
