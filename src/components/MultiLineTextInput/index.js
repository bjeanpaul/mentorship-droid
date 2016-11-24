import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { TextInput, Text } from 'src/components';
import styles, { MAX_HEIGHT } from './styles';


export default class MultiLineTextInput extends React.Component {
  constructor(props) {
    super(props);

    const { value = '' } = props;

    this.state = {
      height: 0,
      charCount: value.length || 0,
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChange({ nativeEvent }) {
    this.setState({
      height: nativeEvent.contentSize.height,
    });
  }

  onChangeText({ text }) {
    this.setState({ charCount: text.length });

    if (this.props.onChangeText) {
      this.props.onChangeText(text);
    }
  }

  render() {
    let charCount;

    if (this.props.maxLength) {
      charCount = (
        <Text uid="charCount" style={styles.charCount}>
          {this.state.charCount}/{this.props.maxLength}
        </Text>);
    }

    return (
      <View>
        <TextInput
          {...this.props}
          uid="input"
          multiline
          onChange={this.onChange}
          onChangeText={this.onChangeText}
          style={{ height: Math.max(MAX_HEIGHT, this.state.height) }}
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
