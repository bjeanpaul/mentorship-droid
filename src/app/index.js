import React, {
  Component,
} from 'react';

import { View, Text } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from '../stores/configureStore';
const initialState = { mentor: { authToken: 'YWRtaW46MTIz' } };
const store = configureStore(initialState);


import {
  Router,
  Route,
  StackRoute,
  IndexRoute,
  Link,
} from 'react-router-native';


import Landing from '../Onboarding/Landing';
import LogIn from '../Mentor/LogIn';
import ChangePassword from '../Mentor/ChangePassword';

const NoMatch = () => (
  <View>
    <Text>404 - not found</Text>
  </View>
);


const StackContainer = (props) => (
  <View style={{ flex: 1, backgroundColor: 'black' }}>
    {props.children}
  </View>
);


// TODO: Onboarding will include a wonderful header, or?

// Landing
// ActivateAccount (Variation of Log In)
// ResetPassword (Variation of Reset Password)
// Setup Profile
  // Picture
  // Job
  // Why
  // Own mentor
  // Three Words
  // Skills
// Creating Account
// Saved

const App = function App() {
  return (
    <Provider store={store}>
      <Router addressBar>
        <StackRoute
          path="/"
          component={StackContainer}
        >
          <IndexRoute component={ChangePassword} />
          <Route path="landing" component={Landing} />
          <Route path="log-in" component={LogIn} />
          <Route path="change-password" component={ChangePassword} />
        </StackRoute>


        <Route path="*" component={NoMatch} />
      </Router>
    </Provider>
  );
};
export default App;
