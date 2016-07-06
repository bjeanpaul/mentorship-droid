import React from 'react';
import { View } from 'react-native';
import { Route, StackRoute, IndexRoute } from 'react-router-native';

import Welcome from './Welcome';
import ProfilePicture from './ProfilePicture';
import CameraRoll from './CameraRoll';
import QuestionRoutes from './QuestionRoutes';

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
    <IndexRoute component={() => <Welcome nextPath="profile-picture" />} />
    <Route path="profile-picture" component={(props) =>
        <ProfilePicture {...props} nextPath="occupation" selectPicturePath="select-picture" />}
    />
    <Route path="select-picture" component={CameraRoll} />
    {QuestionRoutes}

  </StackRoute>
);
