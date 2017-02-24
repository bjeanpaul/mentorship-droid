import { mergeAll } from 'lodash/fp';
import { assign, some, eq } from 'lodash';
import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import SimpleMarkdown from 'simple-markdown';
import mdStyles from 'react-native-simple-markdown/styles';
import mdRules from 'react-native-simple-markdown/rules';

import { RichText as RichTextObject } from 'src/richText';
import defineTypes from './defineTypes';
import baseRules from './rules';
import baseStyles from './styles';


class RichText extends Component {
  static defaultProps = {
    styles: {},
    rules: () => ({}),
  };

  shouldComponentUpdate(nextProps) {
    return some(this.props, (v, k) => !eq(nextProps[k], v));
  }

  getStyles() {
    return {
      ...mdStyles,
      ...baseStyles,
      ...this.props.styles,
    };
  }

  getRules(styles) {
    return mergeAll([
      SimpleMarkdown.defaultRules,
      mdRules(styles),
      baseRules(styles),
      this.props.rules(styles),
    ]);
  }

  getRenderFn(styles) {
    const rules = this.getRules(styles);
    return SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, 'react'));
  }

  render() {
    const styles = this.getStyles();
    const renderFn = this.getRenderFn(styles);
    const { content } = this.props;

    return (
      <View style={styles.container}>
        {renderFn(content.tree)}
      </View>
    );
  }
}


RichText.propTypes = {
  content: PropTypes.instanceOf(RichTextObject).isRequired,
  styles: PropTypes.any,
  rules: PropTypes.func,
};


assign(RichText, defineTypes(RichText));
export default RichText;
