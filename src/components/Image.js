import React, { PropTypes } from 'react';
import { View, Image as RNImage, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'contain',
  },
});

const Image = (props) => (
  <View style={[styles.container]}>
    <RNImage style={[styles.image, props.style]} {...props} />
  </View>
);
Image.propTypes = {
  style: PropTypes.any,
};
export default Image;
