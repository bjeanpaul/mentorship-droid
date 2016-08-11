import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';

import { BaseView, Toolbar, Button, Text, Image } from 'src/components';
import COLOR from 'src/constants/colors';
import IMAGE_MENTEE_PHONE from 'app/assets/Mentee_Phone.png';


const styles = StyleSheet.create({
  text: {
    color: COLOR.CALL_NOTIFICATION_TEXT,
    fontSize: 20,
    paddingBottom: 8,
  },
  body: {
    flex: 1,
  },
  content: {
    flex: 0.8,
    paddingLeft: 24,
    paddingRight: 24,
  },
  footer: {
    flex: 0.2,
    paddingBottom: 24,
    justifyContent: 'flex-end',
  },
});

const CallNotification = ({
  date,
  activityName,
}) => (
  <BaseView>
    <Toolbar title="Time for your call" />

    <View style={styles.body}>
      <View style={styles.content}>
        <Image source={IMAGE_MENTEE_PHONE} />
        <Text style={styles.text}>{date}</Text>
        <Text style={styles.text}>{activityName}</Text>
      </View>
      <View style={styles.footer}>
        <Button
          label="Activate Call"
          handlePress={() => {
            // TODO: API call.
          }}
        />
      </View>
    </View>
  </BaseView>
);
CallNotification.propTypes = {
  date: PropTypes.string.isRequired,
  activityName: PropTypes.string,
};

export default CallNotification;
