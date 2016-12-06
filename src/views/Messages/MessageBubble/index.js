import React, { PropTypes } from 'react';

import { Text } from 'src/components';
import baseStyles, { themes } from './styles';
import Bubble from 'src/views/Messages/Bubble';


const MessageBubble = ({
  content,
  styles = {},
}) => (
  <Bubble style={styles.bubble}>
    <Text style={[baseStyles.content, styles.content]}>
      {content}
    </Text>
  </Bubble>
);


MessageBubble.themes = themes;


MessageBubble.propTypes = {
  content: PropTypes.string,
  styles: PropTypes.object,
};


export default MessageBubble;
