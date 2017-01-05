import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import mdStyles from 'react-native-simple-markdown/styles';

import { RichText as RichTextObject } from 'src/api';
import baseStyles from './styles';


class RichText extends Component {
  shouldComponentUpdate() {
  }

  getStyles() {
    return {
      ...mdStyles,
      ...baseStyles,
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <View style={styles.container} />
    );
  }
}


RichText.propTypes = {
  children: PropTypes.instanceOf(RichTextObject).isRequired,
};


export default RichText;
