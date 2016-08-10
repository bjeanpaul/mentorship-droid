import React, { PropTypes } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { BaseView, Text, Button } from 'src/components';
import { font, fontWeight } from 'src/app/styles';


const IMG_PROFILE = require('app/assets/Profile.png');

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
    fontFamily: font.brandonTextMedium,
    fontWeight: fontWeight.medium,
    fontSize: 32,
    color: '#022428',
  },
  intro: {
    color: '#80979a',
    fontSize: 18,
    paddingLeft: 24,
    paddingRight: 24,
  },
});

const Hello = ({
  name = 'Peter',
}) => (
  <BaseView style={styles.base}>

  <View style={styles.imageContainer}>
    <Image
      style={styles.image}
      source={IMG_PROFILE}
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
  name: PropTypes.string,
};

export default Hello;
