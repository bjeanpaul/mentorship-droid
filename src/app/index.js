import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';


import configureStore from 'src/stores/configureStore';
const store = configureStore();

import C from 'src/components/CompletedOverlay';

const App = function App() {
  return (
    <Provider store={store}>
      <C
        title="asdsa"
        message="sadas"
        buttonLabel="asdsad"
        onButtonPress={() => {}}
        linkText="asdas"
      />
    </Provider>
  );
};
export default App;
