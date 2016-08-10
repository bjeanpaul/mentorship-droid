import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';


import configureStore from 'src/stores/configureStore';
const store = configureStore();

import Component from 'src/call/CallNotification';

const App = function App() {
  return (
    <Provider store={store}>
      <Component date="sadsadsad sa" activityName="asdsadsad sadsa d asd" />
    </Provider>
  );
};
export default App;
