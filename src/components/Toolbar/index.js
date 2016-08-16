import React from 'react';
import { View, Image } from 'react-native';
import Text from 'src/components/Text';
import styles from './styles';

const IMG_BACK = require('app/assets/Back_Gray.png');

// TODO: Add subtitle
// TODO: Add back button functionality
export const Toolbar = ({ title }) => (
  <View style={styles.toolbar}>
    <Image style={styles.backButton} source={IMG_BACK} />
    <Text style={styles.title}>{title}</Text>
  </View>
);
Toolbar.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Toolbar;
