import React from 'react';
import { StyleSheet } from 'react-native';
import { Animated, Easing } from 'react-native';

import IMAGE_LOADER from 'app/assets/loader.png';

const DURATION = 2000;


const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
  },
});

export default class SpinningImage extends React.Component {

  constructor() {
    super();
    this.state = {
      spinValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.state.spinValue.setValue(0);
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 1,
        duration: DURATION,
        easing: Easing.linear,
      }
    ).start(() => this.spin());
  }

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <Animated.Image
        source={IMAGE_LOADER}
        style={[styles.image, { transform: [{ rotate: spin }] }]}
      />
    );
  }
}
