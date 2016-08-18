import React from 'react';
import { Provider } from 'react-redux';


import configureStore from 'src/stores/configureStore';
const store = configureStore();

import AuthNavigationContainer from 'src/navigation/auth/AuthNavigationContainer';

const App = function App() {
  return (
    <Provider store={store}>
      <AuthNavigationContainer />
    </Provider>
  );
};
export default App;
