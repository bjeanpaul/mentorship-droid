import React, { PropTypes } from 'react';
import { View, Image as RNImage } from 'react-native';

import { ImageUrl } from 'src/api';


const Image = ({
  url,
  styles = {},
}) => (
  <View style={styles.mentorshipImageContainer}>
    <RNImage
      style={styles.mentorshipImage}
      source={url.resize(328, 183).toSource()}
    />
  </View>
);


Image.propTypes = {
  styles: PropTypes.object,
  url: PropTypes.instanceOf(ImageUrl).isRequired,
};


export default Image;
