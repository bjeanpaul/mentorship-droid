import React from 'react';
import { Provider } from 'react-redux';


import configureStore from 'src/stores/configureStore';
const store = configureStore();

import TopNavigationContainer from 'src/containers/TopNavigationContainer';

const App = function App() {
  return (
    <Provider store={store}>
      <TopNavigationContainer />
    </Provider>
  );
};
export default App;
