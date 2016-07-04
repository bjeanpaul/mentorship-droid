import React from 'react';
import { View } from 'react-native';
import { Router, Route, StackRoute, IndexRoute } from 'react-router-native';

import Welcome from './Welcome'
import ProfilePicture from './ProfilePicture';
import CameraRoll from './CameraRoll';
import Job from './Job';

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

    <IndexRoute component={Job} />

    <Route
      path="profile-picture"
      component={ProfilePicture}

    />
    <Route
      path="camera-roll"
      component={CameraRoll}
    />
    <Route
      path="job"
      component={Job}
    />

  </StackRoute>
);

export default onboardingRoute;
