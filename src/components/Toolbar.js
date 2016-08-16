import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Text from './Text';
import { FONT, FONT_WEIGHT } from 'src/constants/styles.js';
import colors from 'src/constants/colors.js';
const IMG_BACK = require('app/assets/Back_Gray.png');


const styles = StyleSheet.create({
  toolbar: {
    paddingLeft: 16,
    paddingRight: 16,
    height: 72,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: colors.TOOLBAR_TITLE,
  },
});

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
