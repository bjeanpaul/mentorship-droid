import moment from 'moment';
import React, { PropTypes } from 'react';
import { BaseView, Header, Text, PatternBackground } from 'src/components';
import EventListContainer from 'src/containers/EventListContainer';

import {
  View,
  ScrollView,
  Image,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

import images from 'src/constants/images';
import styles from './styles';


const HeaderContent = ({
  shouldStartCall,
  scheduledCall,
  onScheduleCallPress,
  onViewScheduledCallPress,
  onStartScheduledCallPress,
}) => {
  if (!scheduledCall) {
    return (
      <TouchableNativeFeedback onPress={onScheduleCallPress}>
        <View>
          <Text style={Text.types.sectionTitle}>Next call</Text>
          <Text style={styles.headerTitle}>Schedule a call</Text>
        </View>
      </TouchableNativeFeedback>
    );
  } else if (shouldStartCall) {
    return (
      <TouchableNativeFeedback onPress={() => onStartScheduledCallPress(scheduledCall.id)}>
        <View>
          <Text style={Text.types.sectionTitle}>Next call</Text>
          <Text style={styles.headerTitle}>Call your mentee</Text>
        </View>
      </TouchableNativeFeedback>
    );
  } else {
    return (
      <TouchableNativeFeedback onPress={() => onViewScheduledCallPress(scheduledCall.id)}>
        <View>
          <Text style={Text.types.sectionTitle}>Next call</Text>
          <Text style={[styles.headerTitle, styles.headerTitleIsDate]}>
            {moment(scheduledCall.callTime).format('ddd, MMM DD, h:mma')}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
};


HeaderContent.propTypes = {
  scheduledCall: PropTypes.object,
  shouldStartCall: PropTypes.bool.isRequired,
  onScheduleCallPress: PropTypes.func.isRequired,
  onViewScheduledCallPress: PropTypes.func.isRequired,
  onStartScheduledCallPress: PropTypes.func.isRequired,
};


const Journey = ({
  onCallPress,
  onProfilePress,
  ...props,
}) => (
  <BaseView>
    <Header style={styles.header}>
      <View style={styles.headerLeft}>
        <HeaderContent uid="headerContent" {...props} />
      </View>

      <View>
        {/* TODO use profile image once we can get this from the api */}
        <TouchableWithoutFeedback uid="profile" onPress={onProfilePress}>
          <Image source={images.SETTINGS_ICON} />
        </TouchableWithoutFeedback>
      </View>
    </Header>

    <ScrollView>
      <PatternBackground>
        <Image
          source={images.JOURNEY_MENTEE}
          style={styles.mentee}
        >
          <TouchableWithoutFeedback uid="call" onPress={onCallPress}>
            <Image
              source={images.JOURNEY_CALL_ICON}
              style={styles.icon}
            />
          </TouchableWithoutFeedback>
        </Image>

        <View style={styles.eventsContainer}>
          <EventListContainer />
        </View>
      </PatternBackground>
    </ScrollView>
  </BaseView>
);


Journey.propTypes = {
  onCallPress: PropTypes.func.isRequired,
  onProfilePress: PropTypes.func.isRequired,
};


export default Journey;
