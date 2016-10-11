import moment from 'moment';
import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { BaseView, Header, Text, Link } from 'src/components';
import EventListContainer from 'src/containers/EventListContainer';

import images from 'src/constants/images';
import styles from './styles';


// TODO add icon images once we have these
const JourneyHeaderIcon = ({
  onPress,
}) => (
  <View>
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.headerIconPlaceholder} />
    </TouchableWithoutFeedback>
  </View>
);


JourneyHeaderIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
};


const Journey = ({
  nextScheduledCallDate,
  onNextScheduledCallPress,
  onCallPress,
  onProfilePress,
}) => (
  <BaseView>
    <Header style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.nextCall}>NEXT CALL</Text>

        <Link
          style={[styles.date, nextScheduledCallDate && styles.hasDate]}
          onPress={onNextScheduledCallPress}
        >
        {
          nextScheduledCallDate
            ? moment(nextScheduledCallDate).format('ddd, MMM DD, h:mma')
            : 'Schedule a call'
        }
        </Link>
      </View>

      <View>
        <JourneyHeaderIcon
          uid="profile"
          onPress={onProfilePress}
        />
      </View>
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
    </Image>
    <View style={styles.eventsContainer}>
      <EventListContainer />
    </View>
  </BaseView>
);


Journey.propTypes = {
  nextScheduledCallDate: PropTypes.string,
  onNextScheduledCallPress: PropTypes.func.isRequired,
  onCallPress: PropTypes.func.isRequired,
  onMessagePress: PropTypes.func.isRequired,
  onProfilePress: PropTypes.func.isRequired,
};


export default Journey;
