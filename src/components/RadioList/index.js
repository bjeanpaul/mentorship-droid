import { isUndefined } from 'lodash';
import React, { Component, PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { Text } from 'src/components';
import images from 'src/constants/images';
import styles from './styles';


class RadioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: !isUndefined(this.props.initialSelectedIndex) ?
        this.props.initialSelectedIndex :
        void 0,
    };

    this.handlePressRow = this.handlePressRow.bind(this);
  }

  handlePressRow(index) {
    this.setState({
      selectedIndex: index,
    }, () => this.props.onIndexChanged({
      index: this.state.selectedIndex,
      item: this.props.items[index],
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.items.map((item, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => this.handlePressRow(index)}
          >
            <View style={styles.row}>
              <Text style={styles.itemLabel}>{item}</Text>
              <Image
                style={styles.itemImage}
                source={index === this.state.selectedIndex ?
                  images.YES_SELECTED :
                  images.YES
                }
              />
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    );
  }
}


RadioList.propTypes = {
  items: PropTypes.array.isRequired,
  initialSelectedIndex: PropTypes.number,
  onIndexChanged: PropTypes.func.isRequired,
};


export default RadioList;
