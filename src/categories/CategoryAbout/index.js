import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';

import styles from './styles';


const CategoryAbout = ({
  category: {
    image,
  },
}) => (
  <View>
    <View style={styles.imageContainer}>
      {
        image
          ? <Image source={image} style={styles.image} />
          : <View style={styles.imageFallback} />
      }
    </View>
  </View>
);


CategoryAbout.propTypes = {
  category: PropTypes.object.isRequired,
};


export default CategoryAbout;
