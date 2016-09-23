import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'src/components';
import styles from './styles';


const FirstEvent = ({
  firstName,
  onGetStartedPress,
}) => (
  <View style={styles.container}>
    <Text style={styles.greeting}>Hello {firstName}!</Text>
    <Text style={styles.blurb}>
      This is the start of something amazing! Your Mentor’s journey will be
      documented here.
    </Text>
    <Button
      layout={Button.layouts.inline}
      onPress={onGetStartedPress}
    >
      LET’S GET STARTED
    </Button>
  </View>
);


FirstEvent.propTypes = {
  firstName: PropTypes.string,
  onGetStartedPress: PropTypes.func.isRequired,
};

export default FirstEvent;
