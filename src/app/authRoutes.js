import React from 'react';
import { View } from 'react-native';
import { Route, StackRoute, IndexRoute } from 'react-router-native';

import Landing from './Landing';
import Login from 'src/mentor/Login';

const StackContainer = (props) => (
  <View style={{ flex: 1, backgroundColor: 'black' }}>
    {props.children}
  </View>
);

export default (
  <StackRoute
    path="/"
    component={StackContainer}
  >
    <IndexRoute component={Landing} />
    <Route path="landing/" component={Landing} />
    <Route path="login/" component={Login} />
  </StackRoute>
);
