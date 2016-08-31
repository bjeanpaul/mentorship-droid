import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { TextInput, Text } from 'src/components';
import styles from './styles';


export default class MultiLineTextInput extends React.Component {
  constructor(props) {
    super(props);

    const { value = '' } = props;

    this.state = {
      height: 0,
      charCount: value.length || 0,
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
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  maxLength: PropTypes.number,
};
