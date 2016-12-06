import { fromPairs } from 'lodash';
import React, { Component, PropTypes } from 'react';

import {
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';

import { BaseView, PatternBackground, Text } from 'src/components';
import images from 'src/constants/images';
import * as constants from 'src/constants/messages';
import styles from './styles';


const Messages = ({
  groups,
  onSendPress,
}) => (
  <BaseView>
    <PatternBackground>
      <ScrollView>
        <View style={styles.messages}>
          {groups.map((group, i) => <MessageGroup key={i} {...group} />)}
        </View>
      </ScrollView>

      <Send onSendPress={onSendPress} />
    </PatternBackground>
  </BaseView>
);


const MessageGroup = ({
  messages,
}) => (
  <View>
    {messages.map((message, i) => <Message key={i} {...message} />)}
  </View>
);


const messageTypeStyles = fromPairs([
  [constants.MESSAGE_DIRECTION_OUTBOUND, {
    bubble: styles.bubbleOutbound,
    messageContent: styles.messageContentOutbound,
  }],
  [constants.MESSAGE_DIRECTION_INBOUND, {
    bubble: styles.bubbleInbound,
    messageContent: styles.messageContentInbound,
  }],
]);


const Message = ({
  direction,
  content,
}) => {
  const directionStyles = messageTypeStyles[direction];

  return (
    <View style={styles.message}>
      <Bubble style={directionStyles.bubble}>
        <Text style={[styles.messageContent, directionStyles.messageContent]}>
          {content}
        </Text>
      </Bubble>
    </View>
  );
};


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
      <View style={styles.send}>
        <Bubble style={styles.bubbleSend}>
          <TextInput
            multiline
            uid="sendInput"
            placeholder="Write something"
            placeholderTextColor={images.SEND_INPUT_PLACEHOLDER_TEXT}
            underlineColorAndroid="transparent"
            style={styles.sendInputText}
            onTextChange={this.onTextChange}
          />
        </Bubble>

        <TouchableWithoutFeedback
          uid="sendButton"
          onPress={this.onSendPress}
        >
          <View style={styles.sendButton}>
            <Image
              style={styles.sendButtonImage}
              source={images.SEND_MESSAGE_ICON}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}


const Bubble = ({
  children,
  style,
}) => (
  <View style={[styles.bubble, style]}>
    {children}
  </View>
);


Messages.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object),
  onSendPress: PropTypes.func.isRequired,
};


MessageGroup.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
};


Bubble.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
};


Message.propTypes = {
  direction: PropTypes.string,
  content: PropTypes.string,
};


Send.propTypes = {
  onSendPress: PropTypes.func.isRequired,
};


export default Messages;
