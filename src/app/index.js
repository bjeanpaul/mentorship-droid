import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';


import configureStore from 'src/stores/configureStore';
const store = configureStore();

import C from 'src/components/LoadingOverlay'

const App = function App() {
  return (
    <Provider store={store}>
      <C dismiss message="yo yo yoy" />
    </Provider>
  );
};
export default App;
