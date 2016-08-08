import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { Router, Route, StackRoute, IndexRoute } from 'react-router-native';

import configureStore from 'src/stores/configureStore';
const store = configureStore();

// we'll abstract this as well...
const Container = ({ children }) => (
  <View style={{ backgroundColor: 'black', flex: 1 }}>
    {children}
  </View>
);

const NoMatch = () => (
  <View>
    <Text>404 - not found</Text>
  </View>
);

import Landing from 'src/app/Landing';
import LoginContainer from 'src/auth/LoginContainer';
import ActivationContainer from 'src/auth/ActivationContainer';

import ResetPasswordContainer from 'src/auth/ResetPasswordContainer';
import ChangePasswordContainer from 'src/auth/ChangePasswordContainer';

import Hello from 'src/onboarding/Hello';
import ProfilePicture from 'src/onboarding/ProfilePicture';
import CameraRoll from 'src/onboarding/CameraRoll';
import profileSetupRoutes from 'src/onboarding/QuestionRoutes';

// TODO: How to import components dynamically based on user's logged in state.
// https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
const App = function App() {

  return (
    <Provider store={store}>
      <Router navigationBar>


        <StackRoute path="/" component={Container}>
          <IndexRoute component={() => <ActivationContainer />} />
          <Route path="login" component={Landing} />
          <Route path="activate" component={ActivationContainer} />
          <Route path="setup-password" component={ChangePasswordContainer} />
          <Route path="hello" component={Hello} />
          <Route path="profile-picture" component={ProfilePicture} />
          <Route path="profile-picture-camera-roll" component={CameraRoll} />
          {profileSetupRoutes}
        </StackRoute>


        <Route path="*" component={NoMatch} />
      </Router>
    </Provider>
  );
};
export default App;
