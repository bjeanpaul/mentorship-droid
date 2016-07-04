import React from 'react';
import { View } from 'react-native';
import { Router, Route, StackRoute, IndexRoute } from 'react-router-native';

import Welcome from './Welcome'
import ProfilePicture from './ProfilePicture';
import CameraRoll from './CameraRoll';
import Job from './Job';
import Motivation from './Motivation';


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
    <IndexRoute component={Motivation} />
    <Route path="profile-picture" component={ProfilePicture} />
    <Route path="camera-roll" component={CameraRoll} />
    <Route path="job" component={Job} />
    <Route path="motivation" component={Motivation} />

  </StackRoute>
);

export default onboardingRoute;
