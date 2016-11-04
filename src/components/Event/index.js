import moment from 'moment';
import React, { PropTypes } from 'react';
import { View, Image, TouchableNativeFeedback } from 'react-native';
import { Text } from 'src/components';
import styles from 'src/components/Event/styles';
import images from 'src/constants/images';

const Event = ({
  date,
  icon,
  title,
  blurb,
  onPress,
}) => (
  <TouchableNativeFeedback onPress={() => onPress && onPress()}>
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image style={styles.iconImage} source={icon} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>

        <Text numberOfLines={2} style={styles.blurb}>
          {blurb || moment(date).format('dddd Do, MMMM YYYY')}
        </Text>
      </View>

      {
        onPress && <View style={styles.moreContainer}>
          <Image
            style={styles.more}
            source={images.EVENT_MORE}
          />
        </View>
      }
    </View>
  </TouchableNativeFeedback>
);


Event.propTypes = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string,
  onPress: PropTypes.func,
};


export default Event;
