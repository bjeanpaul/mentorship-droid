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
      maxHeight: 0,
      charCount: value.length || 0,
    };

    this.onContentSizeChange = this.onContentSizeChange.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onContentSizeChange({ nativeEvent }) {
    this.setState({
      height: nativeEvent.contentSize.height,
    });
  }

  onChangeText(text) {
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
      <View onLayout={this.onLayout}>
        <TextInput
          {...this.props}
          uid="input"
          multiline
          onContentSizeChange={this.onContentSizeChange}
          onChangeText={this.onChangeText}
          style={{ height: this.state.height }}
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
