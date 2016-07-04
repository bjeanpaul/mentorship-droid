import React, { Component } from 'react';

import {
  View,
  Text,
} from 'react-native';

import {
  Router,
  Route,
  StackRoute,
  IndexRoute,
} from 'react-router-native';

import Welcome from './Welcome'
import ProfilePicture from './ProfilePicture';
import CameraRoll from './CameraRoll';

const StackContainer = (props) => (
  <View style={{ flex: 1, backgroundColor: 'black' }}>
    {props.children}
  </View>
);



const onboardingRoute = (

  <StackRoute
    path="/"
    component={StackContainer}
  >

    <IndexRoute component={ProfilePicture} />

    <Route
      path="profile-picture"
      component={ProfilePicture}
    />
    <Route
      path="camera-roll"
      component={CameraRoll}
    />

  </StackRoute>
);

export default onboardingRoute;
