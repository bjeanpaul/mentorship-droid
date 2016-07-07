import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router-native';

import configureStore from 'src/stores/configureStore';
const initialState = { mentor: { authToken: '' } };
const store = configureStore(initialState);

const Container = (props) => (
  <View style={{ backgroundColor: 'red' }}>
    <Text>1</Text>
    {props.children}
    <Text>2</Text>
  </View>
);

const NoMatch = () => (
  <View>
    <Text>404 - not found</Text>
  </View>
);

const Home = () => (
  <View style={{ flex: 1, backgroundColor: 'red' }}>
    <Text>Welcome to the app, your inside the app.</Text>
  </View>
);


// maybe we can keep these outside of memory if the user is already logged in?


import authRoutes from 'src/app/authRoutes';
//import onboardingRoute from 'src/onboarding/Route';

const App = function App() {


  let routes;
  if (store.getState().mentor.isAuthenticated) {

  } else {
    console.log('-----------')
    // show the login page.
    routes = authRoutes;
  }

  // /user/login/
  // /user/hello/
  // /user/register/
  // /user/forgotpassword/
  // /user/onboarding/

  // Landing
  // Login
    // Forgot Pasword
  // Register
    // Reset Password
    // Onboarding

  return (
    <Provider store={store}>
      <Router addressBar>
        {routes}
        <Route path="*" component={NoMatch} />
      </Router>
    </Provider>
  );
};
export default App;
