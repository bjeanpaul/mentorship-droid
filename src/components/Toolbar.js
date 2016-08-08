import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

import { font, fontWeight } from './src/styleVars.js';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#eee',
  },
  headerTitle: {
    marginTop: 23,
    marginBottom: 25,
    fontSize: 20,
    fontFamily: font.medium,
    fontWeight: fontWeight.medium,
    color: '#003035',
  },
});

// TODO: Add back, add subtitle.
export const Toolbar = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);
Toolbar.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Toolbar;
