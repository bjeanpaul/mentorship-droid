import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';


import configureStore from 'src/stores/configureStore';
const store = configureStore();

import C from 'src/schedule/ScheduleList';

const App = function App() {
  return (
    <Provider store={store}>
      <C />
    </Provider>
  );
};
export default App;
