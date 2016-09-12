import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { BaseView, Header, Text, Link } from 'src/components';

import images from 'src/constants/images';
import styles from './styles';


const ScheduledCallHeader = ({
  date,
  onDatePress,
}) => (
  <Header style={styles.header}>
    <Text style={styles.nextCall}>NEXT CALL</Text>
    <Link
      style={[styles.date, date && styles.hasDate]}
      onPress={onDatePress}
    >
      {date || 'Schedule your first call'}
    </Link>
  </Header>
);
ScheduledCallHeader.propTypes = {
  date: PropTypes.string,
  onDatePress: PropTypes.func,
};

const Journey = ({
  onCallPress,
  onMessagePress,
}) => (
  <BaseView>
    <ScheduledCallHeader date="Thursday, 12th Dec" onDatePress={() => {}} />
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
          style={styles.icon}
          source={images.JOURNEY_MESSAGE_ICON}
        />
      </TouchableWithoutFeedback>
    </Image>
    <View style={styles.eventsContainer} />
  </BaseView>
);
Journey.propTypes = {
  onCallPress: PropTypes.func.isRequired,
  onMessagePress: PropTypes.func.isRequired,
};


export default Journey;
