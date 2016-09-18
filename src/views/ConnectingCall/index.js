import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { BaseView, SpinningImage, Header, HeaderIcon, Text } from 'src/components';
import styles from 'src/views/ConnectingCall/styles';


const ConnectingCall = ({
  onDismissPress,
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
      <SpinningImage />
      <Text style={styles.title}>Connecting the call…</Text>
    </View>
  </BaseView>
);


ConnectingCall.propTypes = {
  onDismissPress: PropTypes.func.isRequired,
};


export default ConnectingCall;
