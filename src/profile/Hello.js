import React, { PropTypes } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { BaseView, Text, Button } from 'src/components';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';
import IMAGE_PROFILE from 'app/assets/Profile.png';

const styles = StyleSheet.create({
  base: {
    justifyContent: 'space-around',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    height: 120,
    width: 120,
  },
  welcome: {
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    fontSize: 32,
    color: colors.PROFILE_HELLO_WELCOME_TEXT,
  },
  intro: {
    color: colors.PROFILE_HELLO_INTRO_TEXT,
    fontSize: 18,
    paddingLeft: 24,
    paddingRight: 24,
  },
});

const Hello = ({
  name = '',
}) => (
  <BaseView style={styles.base}>
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={IMAGE_PROFILE}
      />
    </View>
    <Text style={styles.welcome}>Welcome {name}</Text>
      <Text style={styles.intro}>
      Help build a vibrant mentor community. Complete your profile to allow
      others learn more about you.
    </Text>
    <Button
      label="Complete Profile"
      handlePress={() => {
        // TODO: Handle transition.
      }}
    />
  </BaseView>
);
Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;
