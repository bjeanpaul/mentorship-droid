import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';


const Avatar = ({
  source,
}) => (
  <View
    style={styles.avatar}
  >
    <Image
      source={source}
      style={styles.avatarImage}
    />
  </View>
);


Avatar.propTypes = {
  source: PropTypes.any.isRequired,
};


export default Avatar;
