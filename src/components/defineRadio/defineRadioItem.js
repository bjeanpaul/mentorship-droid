import React, { Component, PropTypes } from 'react';


const defineRadioItem = RadioItemComponent => class RadioItem extends Component {
  static component = RadioItemComponent

  static propTypes = {
    selected: PropTypes.bool,
    value: PropTypes.any,
    onSelect: PropTypes.func,
    renderFn: PropTypes.func,
    RadioItem: PropTypes.any,
  }

  constructor(...args) {
    super(...args);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect() {
    this.props.onSelect(this.props.value);
  }

  render() {
    return <RadioItemComponent {...this.props} onSelect={this.onSelect} />;
  }
};


export default defineRadioItem;
