import React, { PropTypes } from 'react';

import Icon from 'src/components/Icon';
import styles from './styles';

import backLight from 'app/assets/back-light.png';


const HeaderIcon = ({
  type,
  style = {}
}) => (
  <Icon type={type} style={[styles.icon, style]} />
);


HeaderIcon.types = Icon.types;


HeaderIcon.propTypes = {
  type: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};


export default HeaderIcon;
