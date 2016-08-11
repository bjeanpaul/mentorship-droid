import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';


import configureStore from 'src/stores/configureStore';
const store = configureStore();

import C from 'src/components/CompletedOverlay';
import P from 'src/call/CallNotification'

const App = function App() {
  return (
    <Provider store={store}>
      <P date="sadsdsad" activityName="sads ads ad sad " />
    </Provider>
  );
};
export default App;


// <C
//   title="Thu, Apr 13, 2:00pm"
//   message="Jou poes"
//   buttonHandlePress={() => {}}
//   bottomText="X X X X X s"
//   />
