import { merge } from 'lodash';
import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import SimpleMarkdown from 'simple-markdown';
import mdStyles from 'react-native-simple-markdown/styles';
import mdRules from 'react-native-simple-markdown/rules';

import { RichText as RichTextObject } from 'src/api';
import baseRules from './rules';
import baseStyles from './styles';


class RichText extends Component {
  static defaultProps = {
    styles: {},
    rules: () => ({}),
  };

  shouldComponentUpdate() {
  }

  getStyles() {
    return {
      ...mdStyles,
      ...baseStyles,
      ...this.props.styles,
    };
  }

  getRules(styles) {
    return merge(
      SimpleMarkdown.defaultRules,
      mdRules(styles),
      baseRules(styles),
      this.props.rules(styles),
    );
  }

  getRenderFn(styles) {
    const rules = this.getRules(styles);
    return SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, 'react'));
  }

  render() {
    const styles = this.getStyles();
    const renderFn = this.getRenderFn(styles);
    const { children } = this.props;

    return (
      <View style={styles.container}>
        {renderFn(children.tree)}
      </View>
    );
  }
}


RichText.propTypes = {
  children: PropTypes.instanceOf(RichTextObject).isRequired,
  styles: PropTypes.any,
  rules: PropTypes.func,
};


export default RichText;
