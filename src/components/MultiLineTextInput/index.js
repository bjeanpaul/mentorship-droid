import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { TextInput, Text } from 'src/components';
import styles from './styles';


export default class MultiLineTextInput extends React.Component {
  constructor() {
    super();
    this.state = {
      height: 0,
      charCount: 0,
    };
  }

  render() {
    let charCount;
    if (this.props.maxLength) {
      charCount = (
        <Text style={styles.charCount}>
          {this.state.charCount}/{this.props.maxLength}
        </Text>);
    }

    return (
      <View>
        <TextInput
          {...this.props}
          multiline
          onChange={(event) => this.setState({
            height: event.nativeEvent.contentSize.height,
          })}
          onChangeText={(text) => {
            this.setState({
              charCount: text.length,
            });
            if (this.props.onChangeText) {
              this.props.onChangeText(text);
            }
          }}
          style={{
            height: Math.max(32, this.state.height),
          }}
        />
        {charCount}
      </View>
    );
  }
}


MultiLineTextInput.propTypes = {
  onChangeText: PropTypes.func,
  maxLength: PropTypes.number,
};
