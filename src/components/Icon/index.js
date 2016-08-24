import React, { PropTypes } from 'react';
import { Image } from 'react-native';

import backLight from 'app/assets/back-light.png';

import styles from './styles';


const Icon = ({
  type,
  style = {},
}) => (
  <Image source={type} style={[styles.icon, style]} />
);


Icon.types = {
  backLight,
};


Icon.propTypes = {
  type: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};


export default Icon;
