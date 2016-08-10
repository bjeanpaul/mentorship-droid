import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { BaseView, Text, Link, Button } from 'src/components';


const IMG_LANDING = require('app/assets/Landing.png');

const styles = StyleSheet.create({
  image: {
    flex: 0.6,
    overflow: 'hidden',
    alignItems: 'center',
  },
  getStarted: {
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  getStartedHeading: {
    fontSize: 20,
    marginBottom: 15,
  },
  login: {
    padding: 15,
    backgroundColor: 'rgba(42, 45, 48, 0.05)',
    justifyContent: 'center',
  },
});

const Landing = () => (
  <BaseView>
    <View style={styles.image}>
      <Image resizeMode="stretch" source={IMG_LANDING} />
    </View>
    <View style={styles.getStarted}>
      <Text style={styles.getStartedHeading}>
        This is a short, but sweet, description of the application.
      </Text>
      <Button
        label="Get Started"
        handlePress={() => {
          // TODO: Transition
        }}
      />
    </View>
    <View style={styles.login}>
      <Text style={styles.loginText}>
        Already have an account?
        <Link> Log in.</Link>
      </Text>
    </View>
  </BaseView>
);

export default Landing;
