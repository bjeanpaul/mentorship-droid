import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';


import configureStore from 'src/stores/configureStore';
const store = configureStore();

import C from 'src/components/CompletedOverlay'

const App = function App() {
  return (
    <Provider store={store}>
      <C
        title="Call notes saved"
        message="Thu, Apr 13, 2:00pm"
        buttonLabel="DO SOMETHING AGAIN?"
        buttonHandlePress={() => consoe.log('pew')}

        bottomText="Schedule another call?"
        />
    </Provider>
  );
};
export default App;
