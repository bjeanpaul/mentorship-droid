import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import { BaseView, Text, Link, Button, Icon } from 'src/components';

import styles from './styles';
import images from 'src/constants/images';

const Landing = ({
  onGetStartedPress,
  onLoginPress,
}) => (
  <BaseView>
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={images.ONBOARDING_LANDING}
      />
    </View>
    <View style={styles.bottom}>
      <View style={styles.getStarted}>
        <Text style={styles.getStartedHeading}>
          This is a short, but sweet, description of the application.
        </Text>
        <Button
          theme={Button.themes.transparent}
          onPress={onGetStartedPress}
        >
          GET STARTED
        </Button>
      </View>
      <View style={styles.login}>
        <Text style={styles.loginText}>
          Already have an account?
          <Link onPress={onLoginPress}> Log in.</Link>
        </Text>
      </View>
    </View>
  </BaseView>
);
Landing.propTypes = {
  onGetStartedPress: PropTypes.func.isRequired,
  onLoginPress: PropTypes.func.isRequired,
};

export default Landing;
