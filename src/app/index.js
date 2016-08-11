import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';


import configureStore from 'src/stores/configureStore';
const store = configureStore();

import C from 'src/call/CallNotification'

const App = function App() {
  return (
    <Provider store={store}>
      <C
        date="Thu, Apr 13, 2:00pm"
        activityName="Teach Peter how to Fish, and Juggle, and eat Macaroni"
        />
    </Provider>
  );
};
export default App;
