import React from 'react';
import { Provider } from 'react-redux';

import errors from 'src/errors';
import configureStore from 'src/stores/configureStore';
import TopNavigationContainer from 'src/containers/TopNavigationContainer';


const store = configureStore();
errors(store);


const App = function App() {
  return (
    <Provider store={store}>
      <TopNavigationContainer />
    </Provider>
  );
};


export default App;
