import React, { Component, PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { Text } from 'src/components';
import images from 'src/constants/images';
import styles from './styles';


class RadioItem extends Component {
  constructor(...args) {
    super(...args);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect() {
    this.props.onSelect(this.props.value);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onSelect}>
        <View style={styles.item}>
          <Text style={styles.itemLabel}>
            {this.props.children}
          </Text>

          <Image
            style={styles.itemImage}
            source={
              this.props.selected
                ? this.props.iconSelected
                : this.props.iconUnselected
            }
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


RadioItem.propTypes = {
  selected: PropTypes.bool,
  value: PropTypes.any.isRequired,
  onSelect: PropTypes.func,
  children: PropTypes.any,
  iconSelected: PropTypes.any,
  iconUnselected: PropTypes.any,
};


RadioItem.defaultProps = {
  iconSelected: images.YES_SELECTED,
  iconUnselected: images.YES,
};


export default RadioItem;
