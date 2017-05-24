import React, { PropTypes } from 'react';
import { Image, View } from 'react-native';

import images from 'src/constants/images';
import { BaseView, Header, HeaderIcon, Text, Button } from 'src/components';
import styles from 'src/views/ForgotPasswordResetSuccess/styles';

const ForgotPasswordResetSuccess = ({
  onDismissPress,
  onLoginPress,
}) => (
  <BaseView style={styles.base}>
    <Header>
      {
        onDismissPress && <HeaderIcon
          uid="dismiss"
          type={HeaderIcon.types.dismissLight}
          onPress={onDismissPress}
        />
      }
    </Header>

    <View style={styles.body}>
      <View style={styles.contentContainer}>
        <Image source={images.OVERLAY_DONE} />
        <Text style={styles.title}>Password Successfully Reset</Text>

        <Text style={[Text.themes.light, styles.message]}>
          Please log in
        </Text>
      </View>

      <View style={styles.actionContainer}>
        <Button
          uid="login"
          theme={Button.themes.transparentDark}
          onPress={onLoginPress}
        >
          LOG IN
        </Button>
      </View>
    </View>
  </BaseView>
);

ForgotPasswordResetSuccess.propTypes = {
  onDismissPress: PropTypes.func.isRequired,
  onLoginPress: PropTypes.func.isRequired,
};


export default ForgotPasswordResetSuccess;
