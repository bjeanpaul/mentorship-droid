import { isUndefined } from 'lodash';
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
  count,
  onPress,
}) => (
  <TouchableNativeFeedback onPress={() => onPress && onPress()}>
    <View style={styles.container}>
      <View>
        <View style={styles.icon}>
          <Image style={styles.iconImage} source={icon} />
        </View>

        {
          !isUndefined(count) && <View style={styles.counter}>
            <Text style={styles.counterContent}>{count}</Text>
          </View>
        }
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>

        <Text numberOfLines={2} style={styles.blurb}>
          {blurb || moment(date).format('dddd Do, MMMM YYYY')}
        </Text>
      </View>

      {
        onPress && <View style={styles.more}>
          <Image source={images.EVENT_MORE} />
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
  count: PropTypes.number,
  onPress: PropTypes.func,
};


export default Event;
