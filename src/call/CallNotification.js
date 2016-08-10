import React, { PropTypes } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { BaseView, Toolbar, Button, Text } from 'src/components';
import { COLOR } from 'src/constants/styles';
import IMAGE_MENTEE_PHONE from 'app/assets/Mentee_Phone.png';


const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.5,
    marginLeft: 16,
    marginRight: 16,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  contentContainer: {

  },
  text: {
    color: COLOR.DARK_TEAL,
    fontSize: 20,
    paddingBottom: 8,
  },
});

const CallNotification = ({
  date,
  activityName,
}) => (
  <BaseView
    style={{
      paddingBottom: 24,
    }}
  >
    <Toolbar title="Time for your call" />

    <View style={styles.imageContainer}>
      <Image style={styles.image} source={IMAGE_MENTEE_PHONE} />
    </View>
    <Text style={styles.text}>{date}</Text>
    <Text style={styles.text}>{activityName}</Text>
    <Button
      label="Activate Call"
      handlePress={() => {
        // TODO: API call.
      }}
    />
  </BaseView>
);
CallNotification.propTypes = {
  date: PropTypes.string.isRequired,
  activityName: PropTypes.string,
};

export default CallNotification;
