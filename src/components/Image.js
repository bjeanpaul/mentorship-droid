import React, { PropTypes } from 'react';
import { View, Image as RNImage, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: null,
    width: null,
    resizeMode: 'contain',
  },
});

const Image = (props) => (
  <View style={[styles.container, props.style]}>
    <RNImage {...props} />
  </View>
);
export default Image;
