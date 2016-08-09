import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'src/stores/configureStore';
const store = configureStore();

import ResetPasswordContainer from 'src/auth/ResetPasswordContainer';

const App = function App() {
  return (
    <Provider store={store}>
      <ResetPasswordContainer />
    </Provider>
  );
};
export default App;
