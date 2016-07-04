import React, { Component } from 'react';

import { Link, Back } from 'react-router-native';

import { View, Image } from 'react-native';

import {
  Text,
  Heading,
  Button,
} from 'src/components';


// TODO: Create Progress Bar
const NavigationBar = ({
  nextTextLabel = 'NEXT',
  nextEnabled = false,
  nextLinkTo = "",
  backEnabled = true,
}) => {

  let backButton = <Button style={{ width: 56, marginRight: 16 }}>←</Button>;
  if (backEnabled) {
    backButton = <Back>{ backButton }</Back>;
  }
  let nextButton = (
    <Button
      borderColor={ nextEnabled ? undefined : '#dfe5e6' }
      style={{ flex: 1, marginLeft: 0 }}
    >
      { nextTextLabel }
    </Button>);
  if (nextEnabled && nextLinkTo) {
    nextButton = <Link to={nextLinkTo}>{ nextButton }</Link>;
  }

  return (
    <View style={{
      flexDirection: 'row',
    }}>
      { backButton }
      { nextButton }
    </View>
  );
};


const ProfilePicture = ({ location: { query: { imageURI } } }) => {


  let imageSource;
  if (imageURI) {
    imageSource = { uri: imageURI };
  } else {
    imageSource = require("app/assets/Profile_Add.png");
  }

  return (
    <View style={{ flex: 1 }}>
      <Heading>Add a profile picture</Heading>
      <Link to="camera-roll/">
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
