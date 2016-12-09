import moment from 'moment';
import React, { PropTypes } from 'react';

import { Text } from 'src/components';
import baseStyles, { themes, states } from './styles';
import Bubble from 'src/views/Messages/Bubble';


const MessageBubble = ({
  content,
  timestamp,
  styles = {},
}) => (
  <Bubble style={[baseStyles.bubble, styles.bubble]}>
    <Text style={[baseStyles.content, styles.content]}>
      {content}
      {' '}
      <Text style={baseStyles.time}>{moment(timestamp).format('HH:MM')}</Text>
    </Text>
  </Bubble>
);


MessageBubble.themes = themes;
MessageBubble.states = states;


MessageBubble.propTypes = {
  content: PropTypes.string,
  timestamp: PropTypes.string,
  styles: PropTypes.object,
};


export default MessageBubble;
