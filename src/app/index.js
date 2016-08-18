import React from 'react';
import { Provider } from 'react-redux';


import configureStore from 'src/stores/configureStore';
const store = configureStore();

import AuthNavigatorContainer from 'src/navigation/auth/NavigatorContainer';

const App = function App() {
  return (
    <Provider store={store}>
      <AuthNavigatorContainer />
    </Provider>
  );
};
export default App;
