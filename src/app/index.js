import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';


import configureStore from 'src/stores/configureStore';
const store = configureStore();

import Component from 'src/schedule/ScheduleDetail';

const App = function App() {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};
export default App;
