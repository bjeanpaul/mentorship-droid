import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Text from './Text';
import { FONT, FONT_WEIGHT, COLOR } from 'src/constants/styles.js';
const IMG_BACK = require('app/assets/Back_Gray.png');


const styles = StyleSheet.create({
  header: {
    paddingLeft: 16,
    paddingRight: 16,
    height: 72,
    justifyContent: 'center',
  },
  headerBackButton: {
    position: 'absolute',
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: COLOR.DARK_TEAL,
  },
});

// TODO: Add subtitle
// TODO: Add back button functionality
export const Toolbar = ({ title }) => (
  <View style={styles.header}>
    <Image style={styles.headerBackButton} source={IMG_BACK} />
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);
Toolbar.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Toolbar;
