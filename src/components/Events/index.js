import React, { PropTypes } from 'react';
import { View } from 'react-native';

const Event = ({
  type,
  date,
  icon,
  title,
  blurb,
  onPress,
}) => (
  <View>
  </View>
);
Event.PropTypes = {
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  blurb: PropTypes.string,
  onPress: PropTypes.func,
}
