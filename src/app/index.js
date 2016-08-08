import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from 'src/stores/configureStore';
const store = configureStore();

const App = function App() {
  return (
    <Provider store={store}>
      <View><Text>Mentor Together App</Text></View>
    </Provider>
  );
};
export default App;
