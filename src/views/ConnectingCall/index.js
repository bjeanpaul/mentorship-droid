import { noop } from 'lodash';
import React, { PropTypes } from 'react';
import { View } from 'react-native';

import {
  BaseView, Header, HeaderIcon, Text, Button,
} from 'src/components';

import styles from 'src/views/ConnectingCall/styles';


const ConnectingCall = ({
  activity,
  onDismissPress,
  onReviewActivityPress = noop,
}) => (
  <BaseView style={styles.base}>
    <Header style={styles.header}>
      <HeaderIcon
        uid="dismiss"
        type={HeaderIcon.types.dismissLight}
        onPress={onDismissPress}
      />
    </Header>

    <View style={styles.body}>
      <Text style={styles.title}>Your call will be connected shortly…</Text>

      {
        activity && <Text style={[Text.themes.light, styles.hint]}>
          You might want to use your loudspeaker during the call to review the activity
        </Text>
      }
    </View>

    <View style={styles.footer}>
      {
        activity && <Button
          uid="review"
          theme={Button.themes.light}
          layout={Button.layouts.stretch}
          onPress={() => onReviewActivityPress(activity)}
        >
          REVIEW ACTIVITY
        </Button>
      }
    </View>
  </BaseView>
);


ConnectingCall.propTypes = {
  activity: PropTypes.object,
  onDismissPress: PropTypes.func.isRequired,
  onReviewActivityPress: PropTypes.func,
};


export default ConnectingCall;
