import { times } from 'lodash';
import React, { Component, PropTypes } from 'react';
import { View, Image } from 'react-native';

import { DEVICE_HEIGHT, DEVICE_WIDTH } from 'src/constants/styles';
import images from 'src/constants/images';
import styles from 'src/components/PatternBackground/styles';


class PatternBackground extends Component {
  static get defaultProps() {
    return {
      pattern: images.PATTERN_BG,
      patternHeight: 416,
      patternWidth: 300,
      initialHeight: DEVICE_HEIGHT,
      initialWidth: DEVICE_WIDTH,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      height: this.props.initialHeight,
      width: this.props.initialWidth,
    };
  }

  onLayout({
    nativeEvent: {
      layout: { height },
    },
  }) {
    this.setState({ height });
  }

  getHeightRepeats() {
    return Math.ceil(this.state.height / this.props.patternHeight);
  }

  getWidthRepeats() {
    return Math.ceil(this.state.width / this.props.patternWidth);
  }

  render() {
    return (
      // <Image key={i} source={images.PATTERN_BG} />
      <View style={styles.container}>
        <View uid="patterns" style={styles.patternContainer}>
        {times(this.getHeightRepeats(), i => (
          <View
            key={String(i)}
          >
            {times(this.getWidthRepeats(), j => (
              <Image key={`${i}:${j}`} source={images.PATTERN_BG} />))}
          </View>))}
        </View>

        <View
          uid="contentContainer"
          style={styles.contentContainer}
          onLayout={event => this.onLayout(event)}
        >
          {this.props.children}
        </View>
      </View>
    );
  }
}


PatternBackground.propTypes = {
  children: PropTypes.any,
  pattern: PropTypes.number,
  patternHeight: PropTypes.number,
  initialHeight: PropTypes.number,
  patternWidth: PropTypes.number,
  initialWidth: PropTypes.number,
};


export default PatternBackground;
