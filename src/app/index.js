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


// TODO: Use React-Native-Router


const NoMatch = () => (
  <View>
    <Text>404 - not found</Text>
  </View>
);

const Onboarding = (props) => (
  <View style={{flex: 1, backgroundColor: 'red', height: 44}}>
    <Text>Onboarding</Text>
    {props.children}
  </View>
);

const Welcome = (props) => (
  <View>
    <Text>Welcome</Text>
    <Link to="/unlock"><Text>Unlock</Text></Link>
  </View>
);

const Unlock = (Unlock) => (
  <View>
    <Text>Unlock</Text>
  </View>
);

// TODO: Onboarding will include a wonderful header, or?

const App = function App() {
  return (
    <Provider store={store}>
      <Router addressBar>
        <StackRoute
          path="/"
          component={Onboarding}
        >
          <IndexRoute component={Welcome} />
          <Route path="unlock" component={Unlock} />
        </StackRoute>
        <Route path="*" component={NoMatch} />
      </Router>
    </Provider>
  );
};
export default App;
