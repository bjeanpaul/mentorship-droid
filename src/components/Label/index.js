import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';

import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';
import Text from './Text';

const styles = StyleSheet.create({
  label: {
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: 14,
    textAlign: 'left',
    color: colors.LABEL_TEXT,
    marginBottom: 9,
  },
});

const Label = ({ title, style }) =>
  <Text style={[styles.label, style]}>{title}</Text>;

Label.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.any,
};
export default Label;
