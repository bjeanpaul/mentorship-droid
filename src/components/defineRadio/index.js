import { noop, omit, keys } from 'lodash';
import React, { Component, PropTypes } from 'react';


const defineRadio = RadioComponent => class Radio extends Component {
  static component = RadioComponent

  static propTypes = {
    selection: PropTypes.any,
    onSelect: PropTypes.func,
    children: PropTypes.any,
  }

  static defaultProps = {
    onSelect: noop,
  }

  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(el) {
    if (!el) return void 0;
    return React.cloneElement(el, {
      key: el.props.value,
      selected: this.props.selection === el.props.value,
      onSelect: el.props.onSelect || this.props.onSelect,
    });
  }

  render() {
    const children = React.Children.map(this.props.children, this.renderItem);

    const props = {
      ...omit(this.props, keys(this.propTypes)),
      children,
    };

    return <RadioComponent {...props} />;
  }
};


export { default as defineRadioItem } from './defineRadioItem';
export default defineRadio;
