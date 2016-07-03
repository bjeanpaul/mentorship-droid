import React, {
  Component,
} from 'react';

import { View, Text } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from 'src/stores/configureStore';
const initialState = { mentor: { authToken: 'YWRtaW46MTIz' } };
const store = configureStore(initialState);


import {
  Router,
  Route,
} from 'react-router-native';


const NoMatch = () => (
  <View>
    <Text>404 - not found</Text>
  </View>
);


import onboardingRoute from 'src/onboarding/Route';





const App = function App() {
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
