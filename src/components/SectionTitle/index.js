import React, { PropTypes } from 'react';

import Text from 'src/components/Text';
import styles from './styles';


export const SectionTitle = ({
  children,
  style = {},
}) => (
  <Text style={[styles.title, style]}>{children.toUpperCase()}</Text>
);


SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.any,
};


export default SectionTitle;
