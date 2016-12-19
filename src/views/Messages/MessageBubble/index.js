import moment from 'moment';
import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { Text } from 'src/components';
import baseStyles, { themes, states } from './styles';
import Bubble from 'src/views/Messages/Bubble';


const MessageBubble = ({
  content,
  timestamp,
  hint,
  styles = {},
}) => (
  <View style={[baseStyles.container, styles.container]}>
    <Bubble style={[baseStyles.bubble, styles.bubble]}>
      <Text style={[baseStyles.content, styles.content]}>
        {content}
        {' '}
        <Text style={baseStyles.time}>{moment(timestamp).format('HH:mm')}</Text>
      </Text>

      {hint && <Text style={[baseStyles.hint, styles.hint]}>{hint}</Text>}
    </Bubble>
  </View>
);


MessageBubble.themes = themes;
MessageBubble.states = states;


MessageBubble.propTypes = {
  styles: PropTypes.object,
  hint: PropTypes.any,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};


export default MessageBubble;
