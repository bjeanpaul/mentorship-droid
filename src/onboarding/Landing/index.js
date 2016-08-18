import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import { BaseView, Text, Link, Button } from 'src/components';

import styles from './styles';
import images from 'src/constants/images';

const Landing = ({
  onGetStartedPress,
  onLoginPress,
}) => (
  <BaseView>
    <View style={styles.image}>
      <Image resizeMode="stretch" source={images.ONBOARDING_LANDING} />
    </View>
    <View style={styles.getStarted}>
      <Text style={styles.getStartedHeading}>
        This is a short, but sweet, description of the application.
      </Text>
      <Button
        label="Get Started"
        onPress={onGetStartedPress}
      />
    </View>
    <View style={styles.login}>
      <Text style={styles.loginText}>
        Already have an account?
        <Link onPress={onLoginPress}> Log in.</Link>
      </Text>
    </View>
  </BaseView>
);
Landing.propTypes = {
  onGetStartedPress: PropTypes.func.isRequired,
  onLoginPress: PropTypes.func.isRequired,
};

export default Landing;
