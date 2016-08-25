import React, { PropTypes } from 'react';

import Icon from 'src/components/Icon';
import styles from './styles';


const HeaderIcon = ({
  type,
  style = {},
}) => (
  <Icon type={type} style={[styles.icon, style]} />
);


HeaderIcon.types = Icon.types;


HeaderIcon.propTypes = {
  type: PropTypes.number.isRequired,
  style: PropTypes.any,
};


export default HeaderIcon;