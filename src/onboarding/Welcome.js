import React, {
  PropTypes,
} from 'react';

import { Link } from 'react-router-native';

import {
  View,
  Image,
} from 'react-native';

import {
  Text,
  Heading,
  Button,
} from 'src/components';

import { fontSize } from 'src/StyleSheet';


const Welcome = ({
  name,
  nextPath,
}) => (
  <View style={{ flex: 1 }}>
    <Image source={require('app/assets/Profile.png')} />
    <Heading style={{ fontSize: fontSize.xxLarge }}>Welcome {name}</Heading>
    <Text style={{ fontSize: fontSize.large }}>
      Help build a vibrant mentor community. Complete your profile to allow
      others learn more about you.
    </Text>
    <Link to={nextPath}>
      <Button>Complete Profile</Button>
    </Link>
  </View>
);
Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  nextPath: PropTypes.string.isRequired,
};

export default Welcome;
