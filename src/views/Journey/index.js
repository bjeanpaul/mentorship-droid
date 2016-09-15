import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { BaseView, Header, Text, Link, Button } from 'src/components';

import images from 'src/constants/images';
import styles from './styles';


const EventGreeting = ({
  onGetStartedPress,
}) => (
  <View style={styles.eventContainer}>
    <Text style={styles.eventGreetingTitle}>Hello!</Text>
    <Text style={styles.eventGreetingBlurb}>
      This is the start of something amazing! Your Mentor’s journey will be
      documented here.
    </Text>
    <Button
      layout={Button.layouts.inline}
      onPress={onGetStartedPress}
    >
      GET STARTED
    </Button>
  </View>
);
EventGreeting.propTypes = {
  firstName: PropTypes.string,
  onGetStartedPress: PropTypes.func.isRequired,
};


const Journey = ({
  nextScheduledCallDate,
  onNextScheduledCallPress,
  onCallPress,
  onMessagePress,
  onGetStartedPress,
}) => (
  <BaseView>
    <Header style={styles.header}>
      <Text style={styles.nextCall}>NEXT CALL</Text>
      <Link
        style={[styles.date, nextScheduledCallDate && styles.hasDate]}
        onPress={onNextScheduledCallPress}
      >
        {nextScheduledCallDate || 'Schedule your first call'}
      </Link>
    </Header>

    <Image
      source={images.JOURNEY_MENTEE}
      style={styles.mentee}
    >
      <TouchableWithoutFeedback onPress={onCallPress}>
        <Image
          source={images.JOURNEY_CALL_ICON}
          style={styles.icon}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={onMessagePress}>
        <Image
          source={images.JOURNEY_MESSAGE_ICON}
          style={styles.icon}
        />
      </TouchableWithoutFeedback>
    </Image>

    <View style={styles.eventsContainer}>
      <Image
        style={styles.eventsBackground}
        source={images.JOURNEY_BG}
      >
        <EventGreeting
          onGetStartedPress={onGetStartedPress}
        />
      </Image>
    </View>

  </BaseView>
);
Journey.propTypes = {
  nextScheduledCallDate: PropTypes.string,
  onNextScheduledCallPress: PropTypes.func.isRequired,
  onCallPress: PropTypes.func.isRequired,
  onMessagePress: PropTypes.func.isRequired,
  onGetStartedPress: PropTypes.func.isRequired,
};
export default Journey;
