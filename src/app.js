import React from 'react';
import { Provider } from 'react-redux';

import { ErrorUtils } from 'react-native';
import errors from 'src/errors';
import configureStore from 'src/stores/configureStore';
import TopNavigationContainer from 'src/containers/TopNavigationContainer';


const store = configureStore();
ErrorUtils.setGlobalHandler(errors(store));


const App = function App() {
  return (
    <Provider store={store}>
      <TopNavigationContainer />
    </Provider>
  );
};


export default App;
