import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';

import Icon from 'src/components/Icon';
import styles from './styles';

import backLight from 'app/assets/back-light.png';


const HeaderIcon = ({
  type,
  style = {}
}) => (
  <Image source={type} style={[styles.icon, style]} />
)


HeaderIcon.types = Icon.types;


HeaderIcon.propTypes = {
  type: PropTypes.number.isRequired,
  style: PropTypes.object,
};


export default HeaderIcon;
