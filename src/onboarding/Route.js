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


const StackContainer = (props) => (
  <View style={{ flex: 1, backgroundColor: 'black' }}>
    {props.children}
  </View>
);



const onboardingRoute = (

  <StackRoute
    path="/"
    component={StackContainer}
    transition="vertical-card-stack"
  >
    <IndexRoute component={Welcome} />

    <Route
      path="welcome"
      component={Welcome}
    />

  </StackRoute>
);

export default onboardingRoute;
