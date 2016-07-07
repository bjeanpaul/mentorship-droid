import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-native';

import configureStore from 'src/stores/configureStore';
const initialState = { mentor: { authToken: 'YWRtaW46MTIz' } };
const store = configureStore(initialState);





const NoMatch = () => (
  <View>
    <Text>404 - not found</Text>
  </View>
);


import onboardingRoute from 'src/onboarding/Route';


// TODO: If a user is logged in; show already logged in -- if a user is not logged in
// show the landing screen.

// TODO: Test Log In
// TODO: Test "Register"
// TODO: Test "Password Reset"


const App = function App() {

  // Determine if the user is authenticated or not;
  store.getState()

  // Landing
  // Login
    // Forgot Pasword
  // Register
    // Reset Password
    // Onboarding

  return (
    <Provider store={store}>
      <Router addressBar>
        {onboardingRoute}

        <Route path="*" component={NoMatch} />
      </Router>
    </Provider>
  );
};
export default App;
