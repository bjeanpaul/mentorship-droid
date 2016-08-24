import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import Text from 'src/components/Text';
import styles from './styles';

const IMG_BACK = require('app/assets/Back_Gray.png');

export const Toolbar = ({
  title,
  onBackPress,
}) => (
  <View style={styles.toolbar}>
    <TouchableWithoutFeedback
      style={styles.backButton}
      onPress={onBackPress}
    >
      <Image source={IMG_BACK} />
    </TouchableWithoutFeedback>
    <Text style={styles.title}>{title}</Text>
  </View>
);
Toolbar.propTypes = {
  title: React.PropTypes.string.isRequired,
  onBackPress: React.PropTypes.func,
};

export default Toolbar;
