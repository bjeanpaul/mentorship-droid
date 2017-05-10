import 'moment-round';
import React from 'react';
import { Provider } from 'react-redux';
import BackAndroid from 'BackAndroid';

import errors from 'src/errors';
import tick from 'src/actions/tick';
import { dismissNative } from 'src/actions/navigation';
import configureStore from 'src/store/configureStore';
import TopNavigationContainer from 'src/containers/TopNavigationContainer';


export const store = configureStore();
errors(store);
store.dispatch(tick());


BackAndroid.addEventListener('hardwareBackPress', () => {
  store.dispatch(dismissNative());
  return true;
});


const App = function App() {
  return (
    <Provider store={store}>
      <TopNavigationContainer />
    </Provider>
  );
};


export default App;
