import React from 'react';
import { Provider } from 'react-redux';

import errors from 'src/errors';
import tick from 'src/actions/tick';
import configureStore from 'src/stores/configureStore';
import TopNavigationContainer from 'src/containers/TopNavigationContainer';


const store = configureStore();
errors(store);
store.dispatch(tick());


const App = function App() {
  return (
    <Provider store={store}>
      <TopNavigationContainer />
    </Provider>
  );
};


export default App;
