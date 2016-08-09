import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'src/stores/configureStore';
const store = configureStore();

import Landing from './Landing';
import LoginContainer from 'src/auth/LoginContainer';

const App = function App() {
  return (
    <Provider store={store}>
      <LoginContainer />
    </Provider>
  );
};
export default App;
