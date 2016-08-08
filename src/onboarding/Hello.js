import React, {
  PropTypes,
} from 'react';

import {
  View,
  Image,
} from 'react-native';

import { Text, Heading, Button } from 'src/components';

import { fontSize } from 'src/StyleSheet';


const Hello = ({
  name,
}) => (
  <View style={{ flex: 1 }}>
    <Image source={require('app/assets/Profile.png')} />
    <Heading style={{ fontSize: fontSize.xxLarge }}>Welcome {name}</Heading>
    <Text style={{ fontSize: fontSize.large }}>
      Help build a vibrant mentor community. Complete your profile to allow
      others learn more about you.
    </Text>
    <Button label="Complete Profile" />
  </View>
);
Hello.propTypes = {
  name: PropTypes.string,
  nextPath: PropTypes.string,
};

export default Hello;
