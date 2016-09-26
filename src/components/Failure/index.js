import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import { BaseView, Text, Button, Header, HeaderIcon } from 'src/components';


// TODO: Figure out if we can log this, and let the user know we know about the
// issue if we can
const Failure = ({
  onDismissPress,
  children,
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
        {children}
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


Failure.propTypes = {
  onDismissPress: PropTypes.func.isRequired,
  children: PropTypes.string,
};


export default Failure;
