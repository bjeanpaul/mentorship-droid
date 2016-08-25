import React, { PropTypes } from 'react';

import Text from 'src/components/Text';
import styles from './styles';


export const Paragraph = ({
  children,
  style = {},
}) => (
  <Text style={[styles.paragraph, style]}>{children}</Text>
);


Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.any,
};


export default Paragraph;
