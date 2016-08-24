import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';

import Text from 'src/components/Text';
import styles from './styles';

import backLight from 'app/assets/back-light.png';


const Icon = ({
  type,
  style = {}
}) => (
  <Image source={type} style={[styles.icon, style]} />
)


Icon.types = {
  backLight,
};


Icon.propTypes = {
  type: PropTypes.number.isRequired,
  style: PropTypes.object,
};


export default Icon;
