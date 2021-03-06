import React, { PropTypes } from 'react';
import { Image, View } from 'react-native';

import images from 'src/constants/images';
import { BaseView, Header, HeaderIcon, Text, Button } from 'src/components';
import styles from 'src/views/ForgotPasswordEmailSent/styles';

const ForgotPasswordEmailSent = ({
  onDismissPress,
  onResetPress,
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
        <Text style={styles.title}>Please check your email</Text>

        <Text style={[Text.themes.light, styles.message]}>
          We sent you an email with instructions for resetting your password
        </Text>
      </View>

      <View style={styles.actionContainer}>
        <Button
          uid="resetPassword"
          theme={Button.themes.transparentDark}
          onPress={onResetPress}
        >
          RESET PASSWORD
        </Button>
      </View>
    </View>
  </BaseView>
);

ForgotPasswordEmailSent.propTypes = {
  onDismissPress: PropTypes.func.isRequired,
  onResetPress: PropTypes.func.isRequired,
};


export default ForgotPasswordEmailSent;
