import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Text from './Text';
import { font, fontWeight } from 'src/app/styles.js';
const IMG_BACK = require('app/assets/Back_Gray.png');


const styles = StyleSheet.create({
  header: {
    padding: 16,
    paddingBottom: 11,
    paddingTop: 24,
    marginBottom: 27,
  },
  headerBackButton: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: font.medium,
    fontWeight: fontWeight.medium,
    color: '#003035',
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
