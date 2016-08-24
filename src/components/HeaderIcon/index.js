import React, { PropTypes } from 'react';

import Icon from 'src/components/Icon';
import styles from './styles';

import backLight from 'app/assets/back-light.png';


const HeaderIcon = ({
  type,
}) => (
  <Icon type={type} style={styles.icon} />
);


HeaderIcon.types = Icon.types;


HeaderIcon.propTypes = {
  type: PropTypes.number.isRequired,
  style: PropTypes.object,
};


export default HeaderIcon;
