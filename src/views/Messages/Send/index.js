import React, { Component, PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback, TextInput } from 'react-native';

import Bubble from 'src/views/Messages/Bubble';
import styles from './styles';
import images from 'src/constants/images';


class Send extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
    this.onSendPress = this.onSendPress.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange(content) {
    this.setState({ content });
  }

  onSendPress() {
    this.props.onSendPress({ content: this.state.content });
  }

  render() {
    return (
      <View style={styles.container}>
        <Bubble style={styles.bubble}>
          <TextInput
            multiline
            uid="sendInput"
            placeholder="Write something"
            placeholderTextColor={images.SEND_INPUT_PLACEHOLDER_TEXT}
            underlineColorAndroid="transparent"
            style={styles.input}
            onTextChange={this.onTextChange}
          />
        </Bubble>

        <TouchableWithoutFeedback
          uid="sendButton"
          onPress={this.onSendPress}
        >
          <View style={styles.send}>
            <Image
              style={styles.sendImage}
              source={images.SEND_MESSAGE_ICON}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}


Send.propTypes = {
  onSendPress: PropTypes.func.isRequired,
};


export default Send;
