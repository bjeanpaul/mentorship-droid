import { noop } from 'lodash';
import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

import RadioItem from './RadioItem';
import styles from './styles';


class Radio extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(el) {
    if (!el) return;
    return React.cloneElement(el, {
      key: el.props.value,
      selected: this.props.selection === el.props.value,
      onSelect: this.props.onSelect,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {React.Children.map(this.props.children, this.renderItem)}
      </View>
    );
  }
}

Radio.propTypes = {
  selection: PropTypes.any,
  children: PropTypes.any,
  onSelect: PropTypes.func,
};

Radio.defaultProps = {
  onSelection: noop,
};


export { RadioItem };
export default Radio;
