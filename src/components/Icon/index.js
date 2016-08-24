import React, { PropTypes } from 'react';
import { Image } from 'react-native';

import images from 'src/constants/images';
import styles from './styles';


const Icon = ({
  type,
  style = {},
}) => (
  <Image source={type} style={[styles.icon, style]} />
);


Icon.types = {
  backLight: images.BACK_LIGHT,
};


Icon.propTypes = {
  type: PropTypes.number.isRequired,
  style: PropTypes.any,
};


export default Icon;
