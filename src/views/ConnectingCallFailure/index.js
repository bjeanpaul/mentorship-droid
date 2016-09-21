import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import { BaseView, Text, Button, Header, HeaderIcon } from 'src/components';


// TODO: Figure out if we can log this, and let the user know we know about the
// issue if we can
const ConnectingCallFailure = ({
  onDismissPress,
}) => (
  <BaseView>
    <Header style={Header.themes.orange}>
      <HeaderIcon
        uid="dismiss"
        type={HeaderIcon.types.dismissLight}
        onPress={onDismissPress}
      />
    </Header>

    <View style={styles.container}>
      <Text style={[Text.themes.light, styles.content]}>
        Sorry, we seem to have an issue on our side preventing the call from starting.
      </Text>

      <Button
        uid="back"
        onPress={onDismissPress}
        layout={[Button.layouts.stretch, styles.backButtonLayout]}
        theme={Button.themes.light}
      >
        GO BACK
      </Button>
    </View>
  </BaseView>
);


ConnectingCallFailure.propTypes = {
  onDismissPress: PropTypes.func.isRequired,
};


export default ConnectingCallFailure;
