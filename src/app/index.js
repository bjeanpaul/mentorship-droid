import React from 'react';
import { Provider } from 'react-redux';


import configureStore from 'src/stores/configureStore';
const store = configureStore();

import { BaseView } from 'src/components';

const App = function App() {
  return (
    <Provider store={store}>
      <BaseView />
    </Provider>
  );
};
export default App;
