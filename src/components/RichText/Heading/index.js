import React, { PropTypes } from 'react';
import { Text } from 'react-native';

import styles from './styles';


const Heading = ({
  value,
}) => (
  <Text style={styles.default}>{value}</Text>
);


Heading.propTypes = {
  value: PropTypes.string.isRequired,
};


export default Heading;
