import React, { PropTypes } from 'react';
import Text from 'src/components/Text';
import styles from './styles';

const Label = ({ title, style }) =>
  <Text style={[styles.label, style]}>{title}</Text>;

Label.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.any,
};
export default Label;
