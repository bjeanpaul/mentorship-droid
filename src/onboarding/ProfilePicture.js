import React, { Component } from 'react';

import { Link } from 'react-router-native';

import { View, Image } from 'react-native';

import {
  Text,
  Heading,
  Button,
} from 'src/components';


// TODO: Create Progress Bar
// TODO: Create Navigation Buttons

const NavigationBar = () => {
  return (
    <View style={{
      flexDirection: 'row',
    }}>
      <Button style={{ width: 56, marginRight: 16 }}>←</Button>
      <Button style={{ flex: 1, marginLeft: 0 }}>Next</Button>
    </View>
  );
};


const ProfilePicture = ({ location }) => {

  let imageSource;
  if (location.query.uri) {
    imageSource = { uri: location.query.uri };
  } else {
    imageSource = require("app/assets/Profile_Add.png");
  }

  return (
    <View style={{ flex: 1 }}>
      <Heading>Add a profile picture</Heading>
      <Link to="camera-roll">
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={imageSource}
          />
          <Text>Choose Photo</Text>
        </View>
      </Link>
      <NavigationBar />
    </View>
  );
};


export default ProfilePicture;
